import styled, {css} from 'styled-components';

import SkillsSet from './SkillsSet';

import { SkillsSet as SkillsSetArr } from './constants';
import useData from './useData';






const Skills = () => {
    const {
        state,
        setDialogData,
        showDialog,
        hideDialog,
        setActiveSkill,
        clearActiveSkill
    } = useData();

    


    const showInfoDialog = (rect, description, img) => {
        let bottom = window.innerHeight - rect.top + 5,
            left = rect.left;

        setDialogData(bottom, left, description, img);
        showDialog();


        
    }


    return (
        <Wrapper>
            <Title>Skills</Title>
            <Content>
                {SkillsSetArr.map(({title, skills}) => 
                                        (<SkillsSet key={title} 
                                                    title={title} 
                                                    skills={skills}
                                                    showInfoDialog={showInfoDialog}
                                                    hideDialog={hideDialog}
                                                    activeSkill={state.activeSkill}
                                                    setActiveSkill={setActiveSkill}
                                                    clearActiveSkill={clearActiveSkill}
                                                    />))}
            </Content>

            <Dialog bottom={state.dialogData.bottom}
                    left={state.dialogData.left}
                    showed={state.dialogData.showed}
            >
                <DialogImage src={state.dialogData.img}/>
                <DialogContent>{state.dialogData.description}</DialogContent>
            </Dialog>
        </Wrapper>
    );
}


export default Skills;

const Dialog = styled.div`
    display: none;
    position: fixed;
    bottom: ${props => props.bottom + "px;"}
    left: ${props => props.left + "px;"}

    width: 250px;
    

    border: 10px double black;
    border-radius: 15px;
    background-color: white;
    padding: 5px;
    opacity: 0;

    text-align: center;

    transition: opacity .4s;

    ${props => props.showed && css`
        display: block;
        opacity: .95;

    `}
`

const DialogImage = styled.img`
    width: 70px;
    

`

const DialogContent = styled.div``

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

    @media (max-width: 940px) {
        justify-content: center;

    }
`;
