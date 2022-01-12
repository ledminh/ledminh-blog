import styled from "styled-components";

import Sidebar from "./Sidebar";

import useData from "../useData";

import MainScreen from "./MainScreen";

const ProjectsList = () => {
    const {projectsData, currentProjectID, setCurrentProject} = useData();

    

    return (
        <Wrapper>
            <Sidebar setCurrentProject={setCurrentProject}
                    projectsData={projectsData}
                    currentProjectID={currentProjectID}/>
            <MainScreen currentProjectID={currentProjectID}
                        projectsData={projectsData} />            
        </Wrapper>
    )
}
export default ProjectsList;



const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: auto;

    border: 1px solid black;
    border-radius: 20px;

    

    margin-bottom: 10px;

    overflow: hidden;

    @media (max-width: 668px) {
        grid-template-columns: auto;
        grid-template-rows: 60px auto;
    }
`


