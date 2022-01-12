import styled
 from "styled-components";
import { Intro_Paragraph } from "./asset/constants";
import { Line } from "./styles";
const DialogContent = () => {


    return (
        <Wrapper>
            <Title>About Me</Title>
            <Content>
                {Intro_Paragraph.map(t => (<Line key={t}>{t}</Line>))}
            </Content>
        </Wrapper>
    )
}

export default DialogContent;

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 50px auto;
    
`

const Title = styled.div`
    display: grid;
    justify-self: center;

    width: 60%;
    text-align: center;
    border-bottom: 3px dashed black;

    font-size: 40px;

    font-family: Lobster;


`

const Content = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;

    font-size: 20px;
    font-family: cursive;

`