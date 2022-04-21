import styled from "styled-components";

export const Title = styled.div `
    color:var(--purple);
    font-family: "OpenSansBold";
    font-size:var(--fontSuperBig);
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const GridCourses = styled.div `
    flex-basis: 100vw;
    flex-wrap:wrap;  
    display: flex;
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

export const Plus = styled.img`
    flex-basis: 100%;
    color: var(--purple);
    width: 8vw;
    height: 6vh;
`;