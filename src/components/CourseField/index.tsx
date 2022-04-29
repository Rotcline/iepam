import React, { useState } from "react";
import { ImgContainer, NombreCurso, CajaTexto, Container, Plus} from "./CourseField.styles";
import UserIMG from '../../images/User.svg';
import { Link, useParams } from "react-router-dom";
import PlusIMG from "../../images/Plus.svg";
import {CREATE_COURSE} from "../../hooks/useCourseHooks"
import { useMutation } from "@apollo/client";

interface Props {
    callback: () => void;
}

const CourseField: React.FC<Props> = ({ callback }) => {
    const { courseID } = useParams();
    const [nombreCurso, setNombreCurso] = useState("");
    const [descripcionCurso, setDescripcionCurso] = useState("");
    const [createCourse] = useMutation(CREATE_COURSE);
    const [newCourse, isNewCourse] = useState(false);


    let obj: any;

    const handleInputTXTArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescripcionCurso(e.currentTarget.value);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombreCurso(e.currentTarget.value)
    }

    const handleBack = () => {
        if(nombreCurso !== "" && descripcionCurso !== ""){
            callback();
        }
        else{
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
            {courseID==="new"?
            <form onClick={e => {
                e.preventDefault();
                createCourse({variables: {active: true, description: descripcionCurso, name: nombreCurso} })
                .then(data => obj = data).then( () => {
                    console.log(obj.data);
                })
            }}>
                <Plus onClick={handleBack}>
                    <img src={PlusIMG}/>
                </Plus>
            </form>
                : <Plus onClick={handleBack}>
                    <img src={PlusIMG} />
                </Plus> }
        </>
    )
}

export default CourseField;

