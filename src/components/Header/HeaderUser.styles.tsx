import styled from "styled-components";

export const ImgContainer = styled.div `
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5px;
`;

export const UserContainer = styled.div `
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img `
    width: 175px;
    height: 70px;
`; 

export const User = styled.img `
    width: 67px;
    height: 64px;
    object-fit: contain;
`;

export const Lock = styled.img `
    width: 57px;
    height: 59px;
    object-fit: contain;
`;

export const HeaderWrapper = styled.header `
    max-height: 7.8vh;
    display: flex;
    position: sticky;
    border-bottom: 2px solid var(--purple);
    justify-content: space-between;
`;