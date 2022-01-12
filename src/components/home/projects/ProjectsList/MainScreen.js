import styled from "styled-components";

import { find } from "lodash";

const MainScreen = ({currentProjectID, projectsData}) => {
    let MainScreenContent = <InitialScreen />;

    if(currentProjectID !== "") {
        const currProject = find(projectsData, {id: currentProjectID});
        const Description = currProject.description;
        MainScreenContent = (<>
                                <Title>{currProject.title}</Title>
                                <Content><Description/></Content>
                            </>)
    }

    return (
        <Wrapper>{MainScreenContent}</Wrapper>
    );
}


export default MainScreen;

const InitialScreen = () => (<i>Click the project on the left for more detail...</i>);


const Wrapper = styled.div`
    grid-column: 2/3;


    padding: 10px;
`

const Title = styled.div`
    font-size: 22px;
    font-weight: 700;

    border-bottom: 1px solid black;

`

const Content = styled.div`
    margin-top: 10px;
`