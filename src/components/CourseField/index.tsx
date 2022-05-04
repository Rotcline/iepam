import React, { useEffect, useState } from "react";
import { ImgContainer, NombreCurso, CajaTexto, Container, Plus, TrashButton, ArrowForward } from "./CourseField.styles";
import UserIMG from '../../images/User.svg';
import { Link, useParams, useNavigate } from "react-router-dom";
import PlusIMG from "../../images/Plus.svg";
import TrashCan from "../../images/trash.svg";
import ArrowFwdIMG from "../../images/ArrowRight.png";
import { CREATE_COURSE, UPDATE_COURSE, useGetCourseByID } from "../../hooks/useCourseHooks"
import { useMutation } from "@apollo/client";
import {DELETE_COURSE} from "../../hooks/useCourseHooks";


interface Props {
    callback: () => void;
}

const CourseField: React.FC<Props> = ({ callback }) => {
    const { courseID } = useParams();
    const [nombreCurso, setNombreCurso] = useState("");
    const [descripcionCurso, setDescripcionCurso] = useState("");
    const [createCourse] = useMutation(CREATE_COURSE);
    const [newCourse, isNewCourse] = useState(false);
    const[borrarCurso] = useMutation(DELETE_COURSE);
    const navigate = useNavigate();
    var data: any;
    data = useGetCourseByID(Number(courseID));
    const [update] = useMutation(UPDATE_COURSE);
    useEffect(() => {
        if (data !== "Loading..." && data !== "Error") {
            if (data.course.name) { setNombreCurso(data.course.name); }
            if (data.course.description) { setDescripcionCurso(data.course.description); }
        }

    }, [data])

    let obj: any;

    const handleInputTXTArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescripcionCurso(e.currentTarget.value);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombreCurso(e.currentTarget.value)
    }

    const handleBack = () => {
        if (nombreCurso !== "" && descripcionCurso !== "") {
            callback();
        }
        else {
            window.alert("Completa los datos solicitados");
        }
    }

    return (
        <>
            <Link to={`/editmembers/${courseID}`}>
                <ImgContainer>
                    <img src={UserIMG} />
                </ImgContainer>
            </Link>
            <form onSubmit={e => {
                e.preventDefault();
                borrarCurso({variables: {id: courseID}})
                .then(data => obj = data).then( () => {
                    console.log(obj.data);
                    navigate('/editcourses');
                });
            }}>
                <TrashButton type="submit">
                    <img src={TrashCan}/>
                </TrashButton>
            </form>
            <Container>
                <NombreCurso
                    type="text"
                    placeholder="Nombre del curso"
                    name="nombrecurso"
                    onChange={handleInput}
                    value={nombreCurso}
                    required
                />
                <CajaTexto
                    name="descripcion"
                    placeholder="Descripción"
                    onChange={handleInputTXTArea}
                    value={descripcionCurso}
                    required

                />
            </Container>
            {courseID === "new" ?
                <form onClick={e => {
                    e.preventDefault();
                    createCourse({ variables: { active: true, description: descripcionCurso, name: nombreCurso } })
                        .then(data => obj = data).then(() => {
                            console.log(obj.data);
                        })
                }}>
                    <Plus onClick={handleBack}>
                        <img src={PlusIMG} />
                    </Plus>
                </form>
                :
                <form onClick={e => {
                    e.preventDefault();
                    update({ variables: { description: descripcionCurso, name: nombreCurso, id: Number(courseID) } })
                        .then(data => obj = data).then(() => {
                            console.log(obj.data);
                        })
                }}>
                    <ArrowForward onClick={handleBack}>
                        <img src={ArrowFwdIMG} />
                    </ArrowForward>
                </form>
            }
        </>
    )
}

export default CourseField;

