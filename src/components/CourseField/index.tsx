import React, { useState } from "react";
import { ImgContainer, NombreCurso, CajaTexto, Container, Plus} from "./CourseField.styles";
import UserIMG from '../../images/User.svg';
import { Link, useParams } from "react-router-dom";
import PlusIMG from "../../images/Plus.svg";

interface Props {
    callback: () => void;
}

const CourseField: React.FC<Props> = ({ callback }) => {
    const { courseID } = useParams();
    const [nombreCurso, setNombreCurso] = useState("");
    const [descripcionCurso, setDescripcionCurso] = useState("");
    
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
            <Plus onClick={handleBack}>
                <img src={PlusIMG}/>
            </Plus>
        </>
    )
}

export default CourseField;

