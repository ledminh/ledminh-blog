import Header from "./header";
import Introduction from "./introduction";
import Skills from "./skills";
import Academic from "./academic";
import Projects from "./projects";
import { useState } from "react";
import SectionTitle from "./components/SectionTitle";
import Resume from "./Resume";

const Home = () => {
    const {
        SKILLS, ACADEMIC, PROJECTS, section, 
        setSkills, setAcademic, setProjects
    } = useSections();

    return (
        <div className="home">
            <Header />
            <Introduction />
            <Resume />
            <SectionTitle setSkills={setSkills} 
                            setAcademic={setAcademic}
                            setProjects={setProjects}
                            section = {section}
                            SKILLS = {SKILLS}
                            ACADEMIC = {ACADEMIC}
                            PROJECTS = {PROJECTS}
                            />
            {
                (section === SKILLS) ? <Skills /> 
                    : ((section === ACADEMIC)? <Academic />
                            : <Projects />)
            }
        </div>
    );
}

export default Home;



const useSections = () => {
    const SKILLS = "HOME/SECTION/SKILL";
    const ACADEMIC = "HOME/SECTION/ACADEMIC";
    const PROJECTS = "HOME/SECTION/PROJECTS";

    const [section, setSection] = useState(SKILLS);

    const setSkills = () => setSection(SKILLS);
    const setAcademic = () => setSection(ACADEMIC);
    const setProjects = () => setSection(PROJECTS);
    
    return {
        SKILLS, ACADEMIC, PROJECTS, section, 
        setSkills, setAcademic, setProjects
    }
    
}