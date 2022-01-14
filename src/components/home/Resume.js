import styled from "styled-components";

const Resume = () => {

    return (
        <Wrapper>
            <Content onClick={() => window.location.href = "https://1drv.ms/b/s!AolUKobORt1CrfQQVPO4IuY_ODdA1g?e=tAe2Ln"}>
                <i class="fas fa-file-pdf"></i>
                <span>my resume</span>
            </Content>
        </Wrapper>
    )
}

export default Resume;

const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
    cursor: pointer;

    
`

const Content = styled.div`
    display: inline-block;
    font-size: 17px;
    padding: 10px;
    padding-bottom: 5px;
    border-bottom: 3px solid black;

    font-weight: 600;
    span {
        margin-left: 7px;
    }

    i {
        font-size: 20px;
        color: black;
    }

    :hover {
        border-bottom: 3px solid #EE6C4D;

        span {
            color: #EE6C4D;
        }

        i {
            color: #eb1000;
        }
    }
`