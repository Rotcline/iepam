import styled from "styled-components"


export const HomeImg = styled.img`
    position: absolute;
    background-size: cover;
    width:100vw;
    height:100vh;
    opacity:75%;
    z-index: -1;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;   

    div
    {
        align-items: center;
        justify-content: center;
    } 
`;

export const Header = styled.h1`

    flex-basis: 100%;
    flex-grow:1;
    flex-shrink: 1;
    text-align: center;
    width: 100%;


    img
    {
        height: 40vh;
    }
`;


export const Email = styled.div`

    flex-basis: 100%;
    text-align: center;
    padding: 5px;

    input
    {
        flex-basis: 100%;
        border:0px;
        border-radius: 20px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
        width: 500px;
    }
`;

export const Password = styled.div`

    padding-bottom: 25px;
    flex-basis: 100%;
    text-align: center;

    input
    {
        flex-basis: 100%;
        border:0px;
        border-radius: 20px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
        width: 500px;
    }
`;

export const LoginButton = styled.button`
    color: var(--white);
    flex-basis: 100%;
    padding: 10px;
    font-size: 23px;
    border-radius: 18px;
    width: 520px;
    border:0px;
    background-color:var(--purple); 

    &hover
    {
        background-color: #776742;
    }
`;

export const  RegisterButton = styled.button`
    color: var(--white);
    flex-basis: 100%;
    padding: 10px;
    font-size: 23px;
    border-radius: 18px;
    width: 520px; 
    margin:1vh;
    border:0px;
    background-color:var(--purple);

    &hover
    {
        background-color: #776742;
    }
`;

export const ForgotPasswordButton = styled.button`
    color: var(--white);
    flex-basis: 100%;
    padding: 10px;
    font-size: 23px;
    border-radius: 18px;
    width: 520px; 
    margin:1vh;
    border:0px;
    background-color:var(--golden);
    bor

    &hover
    {
        background-color: #776742;
    }
`;

export const ButtonsBox = styled.div`
    display: flex;
    border:0px;
    margin:1vh;
    flex-direction: column;
    flex-basis: 100%;
    text-align:center;
    align-items:center;
    padding-top: 10px;
`;

interface Props {
  error: boolean;
}

export const ErrorBox = styled.div<Props>`
    background-color:#ff6b6b80;
    color:#740000;
    font-family: "OpenSansBold";
    width: 33vw;
    margin-left:33vw;
    padding-left:1vw;
    font-size:var(--fontMed);
    visibility: ${props => (props.error ? 'visible' : 'hidden')};


`;














