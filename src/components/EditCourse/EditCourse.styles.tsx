import styled from "styled-components";

export const Wrapper = styled.div `
    display:flex;
    border-radius: 1vw;
    flex-direction: column;
    margin: 0.1vw;
    width:33vw;
    height:66vh;
    max-height:66vh;

    background-color:var(--purple);
    justify-content: space-between;
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

export const ButtonBox = styled.div`
    display:flex;
`;

interface Props {
  position: string;
}

export const ButtonOptions = styled.button<Props>`
    flex-basis: 50%;
    border:1px solid white;
    border-bottom-left-radius:${props => (props.position === 'Cross' ? '1vw' : '0')};
    border-bottom-right-radius:${props => (props.position === 'Check' ? '1vw' : '0')};
    background-color:var(--purple);
    padding:2vh;
    img{
        width:3vw;
        height:5vh;
    }
`;

