import { useState } from 'react';
import styled, {css} from 'styled-components';

const SkillsSet = ({title, skills}) => {
    const [hover, setHover] = useState(false);

    return (
        <Wrapper hover={hover}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Title hover={hover}>{title}</Title>
            <Content>
                {
                    skills.map(s => <SkillTag key={s} hover={hover}>{s}</SkillTag>)
                }
            </Content>
        </Wrapper>
    )
}

export default SkillsSet;

const Wrapper = styled.div`
    width: 45%;
    min-width: 300px;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 15px;

    overflow: hidden;

    ${props => props.hover && css`
        box-shadow: 0 0 5px black;
        border: 1px solid #EE6C4D;
    `}
`    

const Title = styled.div`
    background-color: #2f2f2f;
    color: #c9c9c9;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;

    ${props => props.hover && css`
        color: #EE6C4D;
        background-color: black;

    `}
`;

const Content = styled.div`
    
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;

`

const SkillTag = styled.span`
    border: 1px solid black;
    
    margin: 4px;
    padding: 4px;

    ${props => props.hover && css`
        border: 1px solid #EE6C4D;
        background-color:  #d6d6d6; 
    `}
`;