import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top:10vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    select{
        border-color:var(--purple);
        border-width:0.3vw;
        border-radius:2vw;
        padding-left:2vw;
        width: 70vw;
        margin:5vh;
        font-size: var(--fontSuperBig)
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

export const Cross = styled.img `
    position:absolute;
    width:3vw;
    top:15vh;
    right:6vw;
`;