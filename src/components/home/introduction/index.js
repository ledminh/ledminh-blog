import { useState } from "react";
import styled, {css} from "styled-components";

import { Intro_Paragraph } from "./asset/constants";
const Introduction = () => {
    const [hover, setHover] = useState(false);
    const [expanded, setExpanded] = useState(false);
    return (
        <Wrapper expanded={expanded}>
            {Intro_Paragraph.map(t => (<Line key={t}>{t}</Line>))}
            <ReadMoreBar hover={hover}
                        expanded={expanded}
            />
            <ReadMoreButton hover={hover}
                            expanded={expanded}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                onClick={() => setExpanded(!expanded)}
                >{expanded? "... MINIMIZE ..." : "... READ MORE ..."}                
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

    ${props => props.expanded && css`
        max-height: 1200px;
        padding-bottom: 30px;
    `}

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

const ReadMoreBar = styled.div`
    position: absolute;
    bottom: 0px;
    
    width: calc(100% - 40px);
    height: 30px;
    mix-blend-mode: hard-light;
    background: linear-gradient(transparent, #2f2f2f);
    opacity: .9;

    transition: background .5s;

    ${props => props.hover && css`
        background: linear-gradient(transparent, black);
    `}

    ${props => props.expanded && css`
        background: none;
        border-bottom: 1px solid black;
    `}
`

const ReadMoreButton = styled.div`
    position: absolute;
    bottom: 5px;
    left: calc(50% -  70px);

    color: white;
    font-weight: bold;

    cursor: pointer;

    ${props => props.hover && css`
        text-shadow: 0 0 5px black;
    `}

    ${props => props.expanded && css`
        color: #EE6C4D;
    `}

    ${props => props.expanded && props.hover && css`
        text-shadow: 0 0 2px #EE6C4D;

    `}
`