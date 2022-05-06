import styled from "styled-components";

export const Title = styled.div `
    color:var(--purple);
    font-family: "OpenSansBold";
    font-size:var(--fontSuperBig);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top:10vh;
`;

export const GridCourses = styled.div `
    flex-basis: 100vw;
    flex-wrap:wrap;  
    display: flex;
`;

export const Cross = styled.img `
    position:absolute;
    width:3vw;
    top:15vh;
    right:6vw;
`;



export const Plus = styled.img`
    flex-basis: 100%;
    color: var(--purple);
    width: 8vw;
    height: 6vh;
`;