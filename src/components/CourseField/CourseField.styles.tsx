import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-top:15vh;
`;

export const ImgContainer = styled.div `
    position:absolute;
    width:10vw;
    margin-top:12.5vh;
    margin-left:14vw;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width:5vw;
    }
`;

export const NombreCurso = styled.input `
    border: 2px solid var(--purple);
    border-radius: 20px;
    width:50vw;
    text-align: center;
    font-size: 1.7em;

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }

    &:focus{
        outline: none!important;
    }
`;

export const CajaTexto = styled.textarea `
    margin-top:10vh;
    border: 2px solid var(--purple);
    border-radius: 20px;
    padding: 1vh 1.5vw;
    font-size: 1.5em;
    width: 50vw;
    height: 20vh;
    word-break: break-word;
    &:focus{
        outline: none!important;
    }  
`;

export const Plus = styled.button`
    position:absolute;
    border:none;
    top:46vh;
    right:5vw;
    border-radius:100vw;
    background-color: transparent;
    img{
        width:4vw;
    }
`;
