import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Cross = styled.img `
    padding-right: 10em;
    padding-top: 15vh;
`;

export const Texto = styled.div `
    color: var(--purple);
    font-weight: 400;
    font-size: 3em;
    line-height: 150%;
    text-align: center;
    padding: 10vh 10vw;
    display: flex;
    align-items: center;
    @media (max-width: 600px){
        font-size: 2em;
    }
`;



