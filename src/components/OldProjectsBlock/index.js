import styled from "styled-components";
import Project from "./Project";

const oldProjects = [
    {
        title: "Tic Tac Toe",
        description: "This game was built using jQuery. The special thing about it is that you can never win.",
        link: "https://codepen.io/ledminh/full/XdWNwz/"
    },
    {
        title: "Game of Life",
        description: "This app simulates the famous Game of Life devised by the British mathematician John Horton Conway.",
        link: "https://codepen.io/ledminh/full/zqEgdd/"
    },
    {
        title: "Roguelike Dungeon Crawler Game",
        description: "This dungeon game has 3 levels. What I like about it is the fact that I coded it entirely on the online editor of Codepen and before I took Object Oriented Design class at school and had no idea how to build such complex app. It was quite a struggle to me back then but totally worth it.",
        link: "https://codepen.io/ledminh/pen/VjPeoN"
    },
    {
        title: "Gross Domestic Product",
        description: "This bar chart illutrates GDP of the U.S from 1947 to 2015. It was written using jQuery and D3",
        link: "https://codepen.io/ledminh/pen/ZOzYja"
    },
    {
        title: "Monthly Global Land - Surface Temperature",
        description: "This heat map illutrates Global Land - Surface Temperature from 1753 to 2015. It was written using jQuery and D3",
        link: "https://codepen.io/ledminh/full/GqjeXw/"
    },


];

const OldProjectsBlock = () => {


    return (
        <Wrapper>
            <Title><h4>OLD PROJECTS</h4></Title>
            <Subtitle><h6>Some of my old projects</h6></Subtitle>
            <Content>
                {
                    oldProjects.map(p => (
                        <Project key={p.key}
                                title={p.title}
                                description={p.description}
                                link={p.link}
                            />
                    ))
                }

            </Content>
        </Wrapper>
    );
}

export default OldProjectsBlock;



const Wrapper = styled.div`
    border: 1px solid #EE6C4D;
    border-radius: 15px;

    overflow: hidden;
`

const Title = styled.div`
    background-color: #EE6C4D;
    color: white;
    padding: 5px;

    text-align: center;
    
`

const Subtitle = styled.div`
    background-color: #f2b9ab;
    text-align: center; 
`

const Content = styled.div`
    padding: 10px;
`