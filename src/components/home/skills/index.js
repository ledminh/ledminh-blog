import styled, {css} from 'styled-components';

import SkillsSet from './SkillsSet';

import { SkillsSet as SkillsSetArr } from './constants';
import useData from './useData';

import SectionWrapper from '../components/SectionWrapper';



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
        <SectionWrapper>
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
        </SectionWrapper>
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
    z-index: 10000;
    ${props => props.showed && css`
        display: block;
        opacity: .95;

    `}
`

const DialogImage = styled.img`
    width: 70px;
    

`

const DialogContent = styled.div``






const Content = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-content: space-between;

    

    @media (max-width: 950px) {
        justify-content: center;

    }
`;
