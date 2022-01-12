import styled, {css} from "styled-components";

const SectionTitle = ({setSkills, setAcademic, setProjects,
                        section, SKILLS, ACADEMIC, PROJECTS}) => {


    return (
        <Wrapper>
            <Item onClick={setSkills}
                    active={section === SKILLS}
            >
                Skills
            </Item>
            <Item onClick={setAcademic}
                    active={section === ACADEMIC}
            >
                Academic
            </Item>
            <Item onClick={setProjects}
                    active={section === PROJECTS}
            >
                Projects
            </Item>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;

    width: 60%;

    margin: auto;
    border-bottom: 2px dashed black;
    margin-bottom: 20px;
    margin-top: 20px;

    @media (max-width: 543px) {
        justify-content: center;
    }
`;

const Item = styled.span`
    font-family: cursive;
    font-weight: 800;
    font-size: 29px;

    width: 30%;

    :last-child {
        text-align: right;
    }

    cursor: pointer;

    transition: color .4s;

    @media (max-width: 710px) {
        font-size: 25px;
    }

    @media (max-width: 618px) {
        font-size: 21px;
    }

    @media (max-width: 543px) {
        width: 80%;

        text-align: center;
        
        :last-child {
            text-align: center;
        }
    }

    :hover {
        color: #EE6C4D;
    }

    ${props => props.active && css`
        color: #EE6C4D;
    `}

`

export default SectionTitle;