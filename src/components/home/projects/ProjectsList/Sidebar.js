import styled, {css} from"styled-components";

const Sidebar = ({setCurrentProject, projectsData, currentProjectID}) => {

    return (
        <Wrapper>
            {
                projectsData.map((p)  =>  <Item key={p.id}
                                                active={p.id === currentProjectID}
                                                onClick={() => setCurrentProject(p.id)}
                                            >
                                            {p.title}
                                        </Item>)
            }
        </Wrapper>
    );
}

export default Sidebar;

const Wrapper = styled.div`
    grid-column: 1/2;

    background-color: #848484;

    
`

const Item = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 5px;

    padding: 5px;
    border: 1px solid white;

    color: white;
    cursor: pointer;

    :hover {
        background-color: #ababab;
        color: #444444;
    }

    ${props => props.active && css`
        background-color: #ababab;
        color: #444444;
    `}

`