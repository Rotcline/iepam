import { createHashHistory } from "history";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    margin-top: 5vh;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
`;


export const FormName = styled.div`
    padding-top: 10px;
    align-items: center;
    text-align: center;
    input
    {
        border-color: var(--purple);
        width: 31vw;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
    }
`;

export const FormPhone = styled.div`
    padding-bottom: 15px;
    padding-top: 15px;
    flex-basis:100%;
    align-items: center;
    text-align: center;
    input{
        border-color: var(--purple);
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
        width: 15vw;
    }
`;

export const FormLevel = styled.div`
    padding-bottom: 15px;
    padding-top: 15px;
    flex-basis: 50%;
    align-items: center;
    text-align: center;
    input
    {
        border-color: var(--purple);
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
        width: 15vw;
    }
`;


export const FormXP = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    flex-basis: 100%;
    align-items: center;
    text-align: center;
`;

export const CajaTexto = styled.textarea `
    border: 2px solid var(--purple);
    border-radius: 20px;
    padding: 1vh 1.5vw;
    font-size: 1.5em;
    width: 28.5vw;
    height: 20vh;
    word-break: break-word; 
`;

export const Cross = styled.img `
    position:absolute;
    width:3vw;
    top:15vh;
    right:6vw;
`;


export const ButtonContainer = styled.div `
    display:flex;
    justify-content: center;
    padding-top: 4vh;
    flex-grow: 3;
`;

export const Save = styled.button `
    border: 2px solid var(--purple);
    border-radius: 25px;
    padding: 0.5vh 10vw;
    background-color: var(--purple);
    color: white;
    font-size: 1.7em;
    transition: background-color 0.25s;

    &:hover{
        background-color: #26085f;
        cursor: pointer;
    }
`;

export const Title = styled.div `
    color:var(--purple);
    font-family: "OpenSansBold";
    font-size:var(--fontSuperBig);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 8vh;
`;

