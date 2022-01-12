import SectionWrapper from "../components/SectionWrapper";

import Item from "./Item";
import {AcademicData} from "./data";

import styled from "styled-components";

const Academic = () => {

    return (
        <SectionWrapper>
            <Content>
                {
                    AcademicData.map((d) => <Item key={d.title} 
                                                    photo={d.photo}
                                                    title={d.title}
                                                    description={d.description}
                                                    duration={d.duration}
                                                    link={d.link}
                                            />)
                }
            </Content>
        </SectionWrapper>
    );
}

export default Academic;

const Content = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-around;
`
