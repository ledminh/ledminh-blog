import styled from "styled-components";
import SectionWrapper from "../components/SectionWrapper";

import ProjectsList from "./ProjectsList";



const Projects = () => {

   

    return (
        <SectionWrapper>
            <Subtitle><span>My two proudest projects</span></Subtitle>
            <Content>
                <ProjectsList />
            </Content>
        </SectionWrapper>

        
    );
}



export default Projects;

const Content = styled.div`
    text-align: center;
`

const Subtitle = styled.div`
    display: grid;
    justify-items: center;
    
    margin-bottom: 10px;
    span {
        background-color: gray;
        color: white;
        padding: 3px 20px;

        text-align: center;
        
    }
`