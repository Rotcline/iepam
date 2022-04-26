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
                />
                <CajaTexto 
                    name="descripcion"
                    placeholder="Descripción"
                />
            </Container>
            <Plus onClick={callback}>
                <img src={PlusIMG}/>
            </Plus>
        </>
    )
}

export default CourseField;

