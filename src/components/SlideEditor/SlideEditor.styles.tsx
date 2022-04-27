import styled from "styled-components";


export const Container = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;

export const RadioContainer = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    margin-left:8vw;
    flex-wrap:wrap;
    label{
        margin-top:8vw;
        font-size:var(--fontSuperBig);
        color:var(--purple);
        font-family:"OpenSansBold";
        margin-right:10vw;
    }
`;

export const RadioButton = styled.input`
    border: 0px;
    width: 6vw;
    height: 6vh;
    margin-top:8vw;
    accent-color: var(--purple);
`;

export const TitleText = styled.div `
    color:var(--purple);
`;

export const TextBox = styled.textarea`
    border: 3px solid var(--purple);
    border-radius: 20px;
    padding: 1vh 1.5vw;
    font-size: var(--fontBig);
    width: 60vw;
    height: 40vh;
    word-break: break-word;
    margin-top:10vh;
    &:focus{
        outline: none!important;
    }  
`;

export const URLInput = styled.input`
    border: 2px solid var(--purple);
    border-radius: 20px;
    width: 60vw;
    text-align: center;
    font-size: var(--fontSuperBig);
    padding: 0 1vw;
    margin-top: 18vh; 

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }

    &:focus{
        outline: none!important;
    }
`;
export const Question = styled.input`
    border: 2px solid var(--purple);
    border-radius: 20px;
    width: 100vw;
    margin-left:20vw;
    margin-right:20vw;
    height:8vh;
    text-align: center;
    font-size: var(--fontBig);
    padding: 0 1vw;
    margin-top:7vh;
    margin-bottom:5vh;

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }
    &:focus{
        outline: none!important;
    }
`;


export const RadioContainerQuestion = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:60vw;
    flex-wrap:wrap;
    label{
        margin-top:8vw;
        font-size:var(--fontSuperBig);
        color:var(--purple);
        font-family:"OpenSansBold";
        margin-right:10vw;
    }
`;

export const Answer = styled.input`
    border: 2px solid var(--purple);
    border-radius: 20px;
    font-size: 1.7em;
    padding: 0 1vw;
    height:7vh;
    width:20vw;
    margin-bottom:5vh;

    &:focus{
        outline: none!important;
    }

    @media(max-width: 600px){
        max-width: 40vw;
    }
`;

export const RadioButtonQuestion = styled.input`
    border: 0px;
    width: 6vw;
    height: 6vh;
    accent-color: var(--purple);
    margin-bottom:5vh;

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
    &:hover{
        cursor: pointer;
    }
`;

export const ArrowBack = styled.button`
    position:absolute;
    border:none;
    top:46vh;
    left:4vw;
    border-radius:100vw;
    background-color: transparent;
    img{
        width:6vw;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const ArrowForward = styled.button`
    position:absolute;
    border:none;
    top:46vh;
    right:4vw;
    border-radius:100vw;
    background-color: transparent;
    img{
        width:6vw;
    }
    &:hover{
        cursor: pointer;
    }
`;