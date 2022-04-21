import styled from "styled-components";

export const CrossDiv = styled.div `
    padding: 2vh 0;
    height: 4vh;
    display: flex;
    justify-content: flex-end;
`;

export const Cross = styled.img `
    max-height: 100%;
    margin-right: 10vw;
`;

export const FirstContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
`;

export const Container = styled.div `
    padding-top: 10vh;
`;

export const RadioContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5vh;
`;

export const RadioButton = styled.input`
    border: 0px;
    width: 4vw;
    height: 4vh;
    accent-color: var(--purple);
`;

export const URLinput = styled.input`
    border: 2px solid var(--purple);
    border-radius: 20px;
    width: 50vw;
    text-align: center;
    font-size: 1.7em;
    padding: 0 1vw;
    margin-top: 2vh; 

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }

    &:focus{
        outline: none!important;
    }
`;

export const BlockContainer = styled.div`
    display: block;
`;

export const Pregunta = styled.input `
    border: 2px solid var(--purple);
    border-radius: 20px;
    width: 50vw;
    text-align: center;
    font-size: 1.7em;
    padding: 0 1vw;

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }

    &:focus{
        outline: none!important;
    }
`;

export const Respuesta = styled.input `
    border: 2px solid var(--purple);
    border-radius: 20px;
    max-width: 15vw;
    font-size: 1.7em;
    padding: 0 1vw;

    &:focus{
        outline: none!important;
    }

    @media(max-width: 600px){
        max-width: 40vw;
    }
`;

export const AnswersContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80vw;
    padding: 6vh 25vw;
`;

export const ButtonContainer = styled.div `
    display:flex;
    justify-content: center;
    padding-top: 8vh;
    flex-grow: 3;
`;

export const ArrowLeft = styled.img `
    position: absolute;
    top: 40%;
    left: 2%;
    transform: scale(0.8);
    @media(max-width: 600px){
        transform: scale(0.6);
    }
    
`;

export const ArrowRight = styled.img `
    position: absolute;
    top: 40%;
    right: 2%;
    transform: scale(0.8);
    @media(max-width: 600px){
        transform: scale(0.6);
    }
`;