import { useState } from 'react';
import styled, {css} from 'styled-components';

const SkillsSet = ({title, skills, showInfoDialog, 
                    hideDialog, activeSkill, 
                    setActiveSkill, clearActiveSkill}) => {
    const [hover, setHover] = useState(false);

    return (
        <Wrapper hover={hover}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Title hover={hover}>{title}</Title>
            <Content>
                {
                    skills.map(s => {
                                    const onClickHandle = (e) => {
                                        if(s.name !== activeSkill){
                                            const rect = e.target.getBoundingClientRect();
                                            showInfoDialog(rect, s.description, s.img);
                                            setActiveSkill(s.name);
                                        }
                                        else {
                                            hideDialog();
                                            clearActiveSkill();
                                        }
                                        
                                    }

                                    const onMouseOutHandle = (e) => {
                                        hideDialog();
                                        clearActiveSkill();
                                    }
                                return <SkillTag key={s.name} 
                                                hover={hover}
                                                active={s.name === activeSkill}
                                                onClick={onClickHandle}
                                                onMouseOut={onMouseOutHandle}
                                                >
                                                    {s.name}
                                        </SkillTag>
                                
                                })
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

    cursor: pointer;
    
    :hover {
        background-color: #747474;
        color: white;
    }

    
    ${props => props.active && css`
        :hover {
            background-color: #232323;
            text-shadow: 0 0 2px white;
        }
    `}


    ${props => props.hover && css`
        border: 1px solid #EE6C4D;
        background-color:  #d6d6d6; 
    `}
`;