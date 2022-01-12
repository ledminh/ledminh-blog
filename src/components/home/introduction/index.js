import styled from "styled-components";

import { Intro_Paragraph } from "./asset/constants";
const Introduction = () => {
    
    return (
        <Wrapper>
            {Intro_Paragraph.map(t => (<Line key={t}>{t}</Line>))}
            <ReadMoreButton 
                >... READ MORE ...                
            </ReadMoreButton>
        </Wrapper>
    );
}

export default Introduction;


const Wrapper = styled.div`
    position: relative;
    margin-top: 15px;
    padding-left: 35px;
    padding-right: 35px;
    max-height: 100px;
    overflow: hidden;

    transition: max-height .5s;

    :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4em;
        z-index: 1;
        pointer-event: none;
        background-image: linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%);
    }
    

    

    @media (max-width: 816px) {
        margin-top: 60px;      
    }

    @media (max-width: 394px) {
        margin-top: 75px;      
    }
`

const Line = styled.p`
    margin-bottom: 10px;
`



const ReadMoreButton = styled.button`
    position: absolute;
    bottom: 5px;
    left: calc(50% -  70px);

    font-weight: bold;

    cursor: pointer;
    
    z-index: 2;
   
    background-color: #EE6C4D;

    :hover {
        background-color: #bd543b;
        color: white;
    }

    

`