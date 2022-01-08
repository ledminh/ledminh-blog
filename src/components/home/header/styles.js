import styled, {css} from 'styled-components';

import bgImage from "./asset/profile-image.jpg";
import avtImage from "./asset/avatar.jpg";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 450px;
    transition: height .4s;
    
    ${props => props.active && css`
        height: 490px;
    `}
`


export const Canvas = styled.div`
    position: absolute;
    top: 0px;
    
    text-align: center;
    padding: 15px;
    
    
    width: 100%;
    height: 400px;
    border-radius: 15px;

    ::before {
        content: "";
        background-image: url(${bgImage});
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        border-radius: 15px;
        opacity: 1;

        transition: opacity .4s;
        z-index: -1;
    }

    ${props => props.active && css`
        ::before {
            opacity: .3;
        }
    `}
`

export const Line = styled.p`
    font-family: monospace;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 800;

    color: #0a3210;
    opacity: 0;
    
    transition: opacity .4s;

    @media (max-width: 816px) {
        font-size: 22px;

    }

    @media (max-width: 728px) {
        font-size: 20px;

    }

    @media (max-width: 628px) {
        font-size: 18px;

    }

    @media (max-width: 436px) {
        font-size: 16px;

    }

    @media (max-width: 334px) {
        font-size: 14px;

    }

    ${props => props.active && css`
        opacity: 1;
    `}
`


export const IntroSection = styled.div`
    position: absolute;
    bottom: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 180px;
    width: 100%;

    display: grid;
    grid-template-columns: 25px 180px auto;
    grid-gap: 10px;
    
    justify-items: center;
    

    @media (max-width: 816px) {
        grid-template-columns: auto;
        grid-gap: 10px;

    }
`;

export const ProfilePicture = styled.div`
    position: relative;
    height: 180px;
    width: 180px;
    
    background-color: white;
    border-radius: 50%;
    
    grid-column: 2/3;
    grid-row: 1/3;
    overflow: hidden;

    ::before {
        content: "";
        background-image: url(${avtImage});
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        border-radius: 50%;

        opacity: .8;

        transition: opacity .4s, transform .4s;
    }

    ${props => props.active && css`
        ::before {
            opacity: 1;
            transform: scale(1.1);
        }

    `}


    @media (max-width: 816px) {
        grid-column: 1/2;
        grid-row: 1/2;

        

    }
`

export const Slogan = styled.div`
    height: 50px;

    font-size: 32px;
    font-family: 'Lobster', cursive;
    
    grid-column: 3/4;
    grid-row: 2/3;
    
    justify-self: start;

    transition: color .4s ease;

    ${props => props.active && css`
        color: #EE6C4D;
    `}

    @media (max-width: 816px) {
        grid-column: 1/2;
        grid-row: 2/3;
        justify-self: center;

    }

    @media (max-width: 584px) {
        font-size: 26px;

    }

    @media (max-width: 474px) {
        font-size: 22px;
        text-align: center;

    }

`