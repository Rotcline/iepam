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

export const SelectorWrapper = styled.div`
    margin-top:5vh;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width:100vw;

    select{
        border-color:var(--purple);
        border-width:0.3vw;
        border-radius:2vw;
        padding-left:2vw;
        width: 50vw;
        margin:5vh;
        font-size: var(--fontSuperBig)
    }
`;

export const UserInCourse = styled.div`
    margin-left:4vw;
    margin-top:1vh;
    color:var(--purple);
    width: 100vw;
    font-size:var(--fontSuperBig);
    font-weight:5vw;
    font-family: 'OpenSansRegular';
`;

