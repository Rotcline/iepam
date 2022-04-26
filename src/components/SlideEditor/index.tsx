import React, { useState } from "react";
import { Container, RadioContainer, RadioButton, Plus, ArrowBack, URLInput, TextBox, Question, Answer, RadioButtonQuestion, RadioContainerQuestion } from "./SlideEditor.styles";

import PlusIMG from "../../images/Plus.svg";
import ArrowBackIMG from "../../images/ArrowLeft.png";
import ArrowFwdIMG from "../../images/ArrowRight.png";

import { useParams } from "react-router-dom";

interface Props{
    callback:()=>void;
}

const SlideEditor: React.FC<Props> = ({ callback }) => {
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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const buttonValue = e.currentTarget.checked;
        const buttonID = e.currentTarget.id;

        if (name === 'question' || name === 'url') setDescription(value);
        if (name === 'answerText0') setAnswer1(value)
        if (name === 'answerText1') setAnswer2(value)
        if (name === 'answerText2') setAnswer3(value)
        if (name === 'answerText3') setAnswer4(value)

        if (buttonID === "Format1" && buttonValue === true) { setIsQuestion(false); setIsVideo(true); }
        if (buttonID === "Format2" && buttonValue === true) { setIsQuestion(true); setIsVideo(false); }
        if (buttonID === "Format0" && buttonValue === true) { setIsVideo(false); setIsQuestion(false); }

        if (value === "0" && buttonValue === true) setCorrectAns(1)
        if (value === "1" && buttonValue === true) setCorrectAns(2)
        if (value === "2" && buttonValue === true) setCorrectAns(3)
        if (value === "3" && buttonValue === true) setCorrectAns(4)
    }

    const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value);
    }

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        data.push({ description: description, order: index, video: isVideo, question: isQuestion, answer1: answer1, answer2: answer2, answer3: answer3, answer4: answer4, correctAns: correctAns, courseID: 1 })
        setDescription("");
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");
        setAnswer4("");
        setCorrectAns(0);
        setIsQuestion(false);
        setIsVideo(false);
        console.log(data);
        setIndex(index+1);
    }

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(index===0){
            callback();
        }else{
            setIndex(index-1);
        }
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
                            {[...Array(4)].map((e, i) => (
                                <>
                                    <RadioButtonQuestion
                                        type="radio"
                                        name="optionQ"
                                        value={i}
                                        onChange={handleInput}
                                    />
                                    <Answer
                                        type="text"
                                        name={"answerText" + i}
                                        placeholder="Respuesta"
                                        onChange={handleInput}
                                    />
                                </>
                            ))}
                        </RadioContainerQuestion>
                    </> : <></>}
            </Container>
            <Plus onClick={handleNext}>
                <img src={PlusIMG} />
            </Plus>
            <ArrowBack onClick={handlePrev}>
                <img src={ArrowBackIMG} />
            </ArrowBack>
        </>
    )
}

export default SlideEditor;

/*
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
*/