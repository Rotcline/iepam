import styled from "styled-components";

export const Wrapper = styled.div `
    border-radius: 1vw;
    margin: 0.1vw;
    width:33vw;
    height:66vh;
    background-color:var(--purple)
`;

export const Image = styled.img `
    border-radius: 1vw;
    width:33vw;
    height:20vh;
    object-fit: cover;
`;

export const Content = styled.div `
    text-align: center;
    color:var(--white);
    &:hover,
    &:focus,
    &:active,
    &:link,
    &:visited{
        color:var(--white);
        text-decoration: none
    }
    div{
        font-family: "OpenSansLight";
        font-size: var(--fontMed);
    }
    h1{
        margin-top:1vh;
        font-family: "OpenSansBold";
        font-size: var(--fontSuperBig);
        text-transform: uppercase;
    }
    
`;


