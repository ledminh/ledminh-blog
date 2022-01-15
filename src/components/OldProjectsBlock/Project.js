import styled from "styled-components";


const Project = ({title, description, link}) => {


    return (
        <Wrapper onClick={() => window.location.href = link}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    );
}

export default Project;

const Wrapper = styled.div`
    border: 1px solid #eb7f65;

    margin-bottom: 10px;

    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px black;
        background-color: #e3e3e3;
    }
`

const Title = styled.div`
    padding: 4px;
    background-color: #6b3d32;
    color: white;
`

const Description = styled.div`
    padding: 5px;
    font-size: 13px;
`