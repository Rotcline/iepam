import styled from "styled-components";

export const ImgContainer = styled.div `
    width: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const User = styled.img `
    max-width: 30%; 
`;

export const FirstContainer = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 5vh 1vw;
`;

export const NombreCurso = styled.input `
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

export const CajaTexto = styled.textarea `
    border: 2px solid var(--purple);
    border-radius: 20px;
    padding: 1vh 1.5vw;
    font-size: 1.5em;
    width: 49vw;
    height: 20vh;
    word-break: break-word;
    &:focus{
        outline: none!important;
    }  
`;


export const Texto = styled.p `
    text-align: center;
    font-size: 1.7em;
    color: var(--purple);
    margin: 0 0;
`;

export const SecondContainer = styled.div `
    display: flex;
    justify-content: center;
    padding-bottom: 7vh;
`

export const ThirdContainer = styled.div `
    padding-top: 5vh;
    display: flex;
    justify-content: space-evenly;
`;

export const FormatedButton = styled.button `
    border: none;
    background: none;
    &:hover{
        cursor: pointer;
    }
`;

export const ButtonContainer = styled.div `
    display:flex;
    justify-content: center;
    padding-top: 8vh;
    flex-grow: 3;
`;

export const Guardar = styled.button `
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

