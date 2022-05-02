import React, { useState } from "react";
import { Container, RadioContainer, RadioButton, Plus, ArrowBack, URLInput, TextBox, Question, Answer, RadioButtonQuestion, RadioContainerQuestion, ArrowForward, Guardar, TrashButton } from "./SlideEditor.styles";

import PlusIMG from "../../images/Plus.svg";
import ArrowBackIMG from "../../images/ArrowLeft.png";
import ArrowFwdIMG from "../../images/ArrowRight.png";
import TrashCan from "../../images/trash.svg";
import {postSlides} from "../../hooks/useFetchSlides"
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

interface Props{
    callback:()=>void;
}

const SlideEditor: React.FC<Props> = ({ callback }) => {
    const { courseID } = useParams();
    const dataProto: { description: string, order: number, video: boolean, question: boolean, answer1: string, answer2: string, answer3: string, answer4: string, correctAns: number, courseID: number }[] = [];
    const [data, setData] = useState(dataProto);
    const [index, setIndex] = useState(0);
    const [description, setDescription] = useState("");
    const [isVideo, setIsVideo] = useState(false);
    const [isQuestion, setIsQuestion] = useState(false);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [correctAns, setCorrectAns] = useState(0);
    const [uploadSlides] = useMutation(postSlides); 
    var obj: any;
    const navigate = useNavigate();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const buttonValue = e.currentTarget.checked;
        const buttonID = e.currentTarget.id;

        if (name === 'question' || name === 'url') setDescription(value);
        if (name === 'answerText1') setAnswer1(value)
        if (name === 'answerText2') setAnswer2(value)
        if (name === 'answerText3') setAnswer3(value)
        if (name === 'answerText4') setAnswer4(value)

        if (buttonID === "Format1" && buttonValue === true) { setIsQuestion(false); setIsVideo(true); }
        if (buttonID === "Format2" && buttonValue === true) { setIsQuestion(true); setIsVideo(false); }
        if (buttonID === "Format0" && buttonValue === true) { setIsVideo(false); setIsQuestion(false); }

        if (value === "1" && buttonValue === true) setCorrectAns(1)
        if (value === "2" && buttonValue === true) setCorrectAns(2)
        if (value === "3" && buttonValue === true) setCorrectAns(3)
        if (value === "4" && buttonValue === true) setCorrectAns(4)
    }

    const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value);
    }

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        //Si el indice en el que estamos es el ultimo y no existe en el array se hace push
        if(index >= data.length){
            if(description !== ""){
                data.push({ description: description, order: index, video: isVideo, question: isQuestion, answer1: answer1, answer2: answer2, answer3: answer3, answer4: answer4, correctAns: correctAns, courseID: Number(courseID) })
                console.log(data);
                setDescription("");
                setAnswer1("");
                setAnswer2("");
                setAnswer3("");
                setAnswer4("");
                setCorrectAns(0);
                setIsQuestion(false);
                setIsVideo(false);
                setIndex(index+1);
            }
            else{
                window.alert("Porfavor ingresa el texto")
            }

        }
        //Si no estamos por insertar algo al array
        else{
            //Si hubo cambios actualizamos los valores
            data[index].description = description;
            data[index].answer1 = answer1;
            data[index].answer2 = answer2;
            data[index].answer3 = answer3;
            data[index].answer4 = answer4;
            data[index].correctAns = correctAns;
            data[index].question = isQuestion;
            data[index].video = isVideo;
            //Si el indice que sigue no existe en el array
            if(index + 1 === data.length){
                setDescription("");
                setAnswer1("");
                setAnswer2("");
                setAnswer3("");
                setAnswer4("");
                setCorrectAns(0);
                setIsQuestion(false);
                setIsVideo(false);
                setIndex(index+1);
            }
            //Si el indice que sigue existe en el array
            else{
                //Cargamos los valores de la slide siguiente
                setDescription(data[index+1].description);
                setAnswer1(data[index+1].answer1);
                setAnswer2(data[index+1].answer2);
                setAnswer3(data[index+1].answer3);
                setAnswer4(data[index+1].answer4);
                setCorrectAns(data[index+1].correctAns);
                setIsQuestion(data[index+1].question);
                setIsVideo(data[index+1].video);
                setIndex(index+1);
            }

        }
    }

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(index===0){
            setIndex(index-1);
            callback();
        }
        else{
            //Si el indice es igual a la longitud del array significa que esta adelantado 
            if(index === data.length){
                //Cargamos los valores de la slide anterior
                setDescription(data[index-1].description);
                setAnswer1(data[index-1].answer1);
                setAnswer2(data[index-1].answer2);
                setAnswer3(data[index-1].answer3);
                setAnswer4(data[index-1].answer4);
                setCorrectAns(data[index-1].correctAns);
                setIsQuestion(data[index-1].question);
                setIsVideo(data[index-1].video);
                setIndex(index-1);
            }
            else{
                //Si hubo cambios actualizamos los valores
                data[index].description = description;
                data[index].answer1 = answer1;
                data[index].answer2 = answer2;
                data[index].answer3 = answer3;
                data[index].answer4 = answer4;
                data[index].correctAns = correctAns;
                data[index].question = isQuestion;
                data[index].video = isVideo;
                //Cargamos los valores de la slide anterior
                setDescription(data[index-1].description);
                setAnswer1(data[index-1].answer1);
                setAnswer2(data[index-1].answer2);
                setAnswer3(data[index-1].answer3);
                setAnswer4(data[index-1].answer4);
                setCorrectAns(data[index-1].correctAns);
                setIsQuestion(data[index-1].question);
                setIsVideo(data[index-1].video);
                setIndex(index-1);
            }
        }
    }

    const handleTrashButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        //Cargamos los valores de la slide anterior
        setDescription(data[index-1].description);
        setAnswer1(data[index-1].answer1);
        setAnswer2(data[index-1].answer2);
        setAnswer3(data[index-1].answer3);
        setAnswer4(data[index-1].answer4);
        setCorrectAns(data[index-1].correctAns);
        setIsQuestion(data[index-1].question);
        setIsVideo(data[index-1].video);
        setIndex(index-1);
        //Eliminamos el ultimo elemento 
        data.pop();
    }

    return (
        <>
            <Container>
                <RadioContainer>
                    <RadioButton type="radio" name="option" id={"Format0"} checked={!isVideo && !isQuestion} onChange={handleInput} />
                    <label htmlFor="text">Texto</label>
                    <RadioButton type="radio" name="option" id={"Format1"} checked={isVideo} onChange={handleInput} />
                    <label htmlFor="video">Video</label>
                    <RadioButton type="radio" name="option" id={"Format2"} checked={isQuestion} onChange={handleInput} />
                    <label htmlFor="question">Pregunta</label>
                </RadioContainer>
                {!isVideo && !isQuestion ?
                    <TextBox
                        name="text"
                        placeholder="Ingresa aquí tu texto"
                        onChange={handleInputText}
                        value={description}
                    />
                    : <></>}
                {isVideo ?
                    <URLInput
                        type="url"
                        name="url"
                        placeholder="https://example.com"
                        pattern="https://.*"
                        onChange={handleInput}
                        value={description}
                    /> : <></>}
                {isQuestion ?
                    <>
                        <Question
                            type="text"
                            placeholder="Escribe aquí la pregunta"
                            name="question"
                            onChange={handleInput}
                            value={description}
                        />
                        <RadioContainerQuestion>
                            {/* Respuesta 1 */}
                            <RadioButtonQuestion
                                type="radio"
                                name="optionQ"
                                value={1}
                                onChange={handleInput}
                                checked= {1 === correctAns ? true : false}
                            />
                            <Answer
                                type="text"
                                name="answerText1"
                                placeholder="Respuesta"
                                onChange={handleInput}
                                value={answer1}
                            />
                            {/* Respuesta 2 */}
                            <RadioButtonQuestion
                                type="radio"
                                name="optionQ"
                                value={2}
                                onChange={handleInput}
                                checked= {2 === correctAns ? true : false}
                            />
                            <Answer
                                type="text"
                                name="answerText2"
                                placeholder="Respuesta"
                                onChange={handleInput}
                                value={answer2}
                            />
                            {/* Respuesta 3 */}
                            <RadioButtonQuestion
                                type="radio"
                                name="optionQ"
                                value={3}
                                onChange={handleInput}
                                checked= {3 === correctAns ? true : false}
                            />
                            <Answer
                                type="text"
                                name="answerText3"
                                placeholder="Respuesta"
                                onChange={handleInput}
                                value={answer3}
                            />
                            {/* Respuesta 4 */}
                            <RadioButtonQuestion
                                type="radio"
                                name="optionQ"
                                value={4}
                                onChange={handleInput}
                                checked= {4 === correctAns ? true : false}
                            />
                            <Answer
                                type="text"
                                name="answerText4"
                                placeholder="Respuesta"
                                onChange={handleInput}
                                value={answer4}
                            />
                        </RadioContainerQuestion>
                    </> : <></>}
            </Container>
            {console.log('Index'+index)}
            { index >= data.length ? 
                <Plus onClick={handleNext}>
                    <img src={PlusIMG} />
                </Plus>
                :
                <ArrowForward onClick={handleNext}>
                    <img src={ArrowFwdIMG} />
                </ArrowForward>
            }

            <ArrowBack onClick={handlePrev}>
                <img src={ArrowBackIMG} />
            </ArrowBack>

            { index === data.length -1 ?
                <>
                    <form onSubmit={e => {
                        e.preventDefault();
                        uploadSlides({variables: {params: data}})
                        .then(data => obj = data).then( () => {
                            console.log(obj.data);
                            navigate('/editcourses');
                        });
                    }}>
                        <Container>
                            <Guardar>Guardar</Guardar>
                            <TrashButton onClick={handleTrashButton}>
                                <img src={TrashCan}/>
                            </TrashButton>
                        </Container>
                    </form>
                </>
                : <></> 
            }
        </>
    )
}

export default SlideEditor;
