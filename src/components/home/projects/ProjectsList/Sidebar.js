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
    grid-row: 1/2;

    background-color: #848484;

    @media (max-width: 668px) {
        grid-column: 1/3;
        grid-row: 1/2;
        width: 100%;
        
        display: flex;
        flex-flow: row wrap;
        
        align-content: center;
        
    }
`

const Item = styled.div`

    width: 80%;

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

    @media (max-width: 668px) {
        width: 20%;
        height: 80%;

        min-width: 60px;

        font-size: 14px;
        justify-content: center;
    }

    ${props => props.active && css`
        background-color: #ababab;
        color: #444444;
    `}

`