import { createHashHistory } from "history";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
            width: 100vw;
            height: 10vh;
            justify-content: space-around;
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
        width:38vw;
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
    input
    {
        border-color: var(--purple);
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
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
    }
`;


export const FormXP = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    flex-basis: 100%;
    align-items: center;
    text-align: center;
    textarea
    {
        border-color: var(--purple);
        width: 550px;
        height: 100px; 
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 7%;
        border-width: 2px;
    }
`;


export const Cross = styled.button`
    outline: 0px;
    margin: 0px;
    background-color: white;
    border: 0px;
    img
    {
        width: 6vw;
        height: 4vh;
    }
`;

export const Close = styled.div`
    flex-basis: 100%;
    text-align: right;
    margin-right: 2vw;
    margin-top: 5vh;
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