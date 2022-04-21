import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Cross = styled.img `
    padding-right: 10vw;
    padding-top: 15vh;
`;

export const FormsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div `
    display:flex;
    justify-content: center;
    padding-top: 20vh;
    flex-grow: 3;
`;

export const Button = styled.button `
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

export const PasswordContainer = styled.div `
    display: flex;
    border: 2px solid var(--purple);
    border-radius: 25px;
    height: 6vh;
    width: 60vw;
    margin-top: 3vh;
    flex-direction: row;
`;

export const LogoPassword = styled.img `
    padding: 0 2vw;
    max-height: 100%;
    @media (max-width: 600px){
        max-height: 75%;
    }
`;

export const Input = styled.input `
    border: none;
    text-align: center;
    font-size: 1.7em;
    width: 45vw;
    &:focus{
        outline: none!important;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }
    @media (max-width: 600px){
        font-size: medium;
    }
`;
