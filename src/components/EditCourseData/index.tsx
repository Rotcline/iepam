import React, { useState } from "react";
import {
    ImgContainer, FirstContainer, SecondContainer, ThirdContainer, NombreCurso,
    CajaTexto, Texto, FormatedButton, ButtonContainer, Guardar, User
} from "./EditCourseData.styles";
import Header from "../Header";
import UserIMG from '../../images/User.svg';
import MinusIMG from '../../images/Minus.svg';
import PlusIMG from '../../images/Plus.svg';
import CrossIMG from '../../images/Cross.svg';
import { Link, useParams } from "react-router-dom";
import EditSlides from "../EditSlides";

const EditCourseData = () => {
    const [slideNumber, setSlideNumber] = useState(1);
    const [passScreen, setPassScreen] = useState(false);
    const [nombreCurso, setNombreCurso] = useState('');
    const [descripcionCurso, setDescripcionCurso] = useState("")
    if (slideNumber < 1) {
        setSlideNumber(1);
    }

    const onClick = () => {
        console.log({ nombreCurso, descripcionCurso, slideNumber })
        if (nombreCurso != '' && descripcionCurso != "") {
            setPassScreen(true)
        }
    }
    const {courseID} = useParams();
    return (
        <>
            {!passScreen ? <>
                <Header page=""/>
                <form action="#" name="formsCurso" >
                    <FirstContainer>
                        <Link to={`/editmembers/${courseID}`}>
                            <ImgContainer>
                                <User src={UserIMG} />
                            </ImgContainer>
                        </Link>

                        <NombreCurso type="text" placeholder="Nombre del curso" value={nombreCurso} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNombreCurso(e.target.value) }} name="nombrecurso" />
                            <ImgContainer>
                                <Link to={`/editcourses`}>
                                    <img src={CrossIMG} />
                                </Link>
                            </ImgContainer>
                    </FirstContainer>

                    <SecondContainer>
                        <CajaTexto name="descripcion" placeholder="Descripción" value={descripcionCurso} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setDescripcionCurso(e.target.value) }} />
                    </SecondContainer>
                </form>

                <Texto>Número de diapositivas</Texto>
                <ThirdContainer>
                    <FormatedButton onClick={() => setSlideNumber(slideNumber - 1)}><img src={MinusIMG} /></FormatedButton>
                    <Texto>{slideNumber}</Texto>
                    <FormatedButton onClick={() => setSlideNumber(slideNumber + 1)}><img src={PlusIMG} /></FormatedButton>
                </ThirdContainer>

                <ButtonContainer>
                    <Guardar type="submit" onClick={onClick}>GUARDAR</Guardar>
                </ButtonContainer>
            </>
                : <EditSlides sn={slideNumber} />
            }
        </>
    )
}

export default EditCourseData;

