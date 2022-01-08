import styled from 'styled-components';

import SkillsSet from './SkillsSet';

import { SkillsSet as SkillsSetArr } from './constants';

const Skills = () => {

    return (
        <Wrapper>
            <Title>Skills</Title>
            <Content>
                {SkillsSetArr.map(({title, skills}) => (<SkillsSet key={title} title={title} skills={skills}/>))}
            </Content>
        </Wrapper>
    );
}


export default Skills;


const Wrapper = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 15px;
`;

const Title = styled.div`
    width: 60%;
    margin: auto;
    text-align: center;
    font-family: cursive;
    font-weight: 800;
    font-size: 30px;
    border-bottom: 2px dashed black;
    margin-bottom: 20px;
`;


const Content = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-content: space-between;

    border-bottom: 1px solid black;
`;
