import { useState } from "react";
import styled, {css} from "styled-components";


const Item = ({photo, title, description, duration, link}) => {
    const [hover, setHover] = useState(false);

    return (
        <Wrapper hover={hover}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => {window.location.href = link}}
        >
            <Logo src={photo}/>
            <Content>
                <Title hover={hover}>{title}</Title>
                <Description hover={hover}>{description}</Description>
                <Duration hover={hover}>{duration.from} - {duration.to}</Duration>
            </Content>
            
        </Wrapper>
    )
}


export default Item;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    min-height: 90px;

    padding-bottom: 5px;
    grid-gap: 10px;
    width: 80%;

    border: 1px solid black;
    
    margin: auto;
    margin-bottom: 10px;

    justify-items: center;
    align-items: center;

    cursor: pointer;

    @media (max-width: 494px) {
        grid-template-columns: 90px auto;
    
    }

    @media (max-width: 412px) {
        grid-template-columns: auto;
    
    }

    ${props => props.hover && css`
        box-shadow: 0 0 2px black;
        
        
    `}
    
`

const Logo = styled.img`
    
    grid-column: 1/2;
    width: 90px;
    height: 90px;
    
    @media (max-width: 494px) {
        width: 80px;
        height: 80px;

    }

    @media (max-width: 412px) {
        grid-row: 1/2;
    }

    
`

const Content = styled.div`
    display: grid;
    grid-column: 2/3;
    width: 100%;
    height: 90%;

    @media (max-width: 412px) {
        grid-column: 1/2;
        grid-row: 2/3;

        text-align: center;
    }
` 

const Title = styled.div`
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 494px) {
        font-size: 14px;

    }
    ${props => props.hover && css`
        color: #0d65aa;
    `}

`

const Description = styled.div`
    color: #5f5f5f;

    @media (max-width: 494px) {
        font-size: 13px;

    }
    ${props => props.hover && css`
        color: black;
    `}
`

const Duration = styled.div`
    font-style: italic;
    font-size: 14px;

    color: #5f5f5f;

    @media (max-width: 494px) {
        font-size: 12px;

    }
    ${props => props.hover && css`
        color: black;
    `}
`