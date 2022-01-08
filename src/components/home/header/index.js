import { Wrapper, Canvas, Line, IntroSection, ProfilePicture,Slogan,  } from './styles';
import { useState } from 'react';


const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <Wrapper active={active}
                onMouseOver={()=> setActive(true)}
                onMouseOut={()=> setActive(false)}
            >
            <Canvas active={active}>
                {["__ hi there __",
                    "I'm Minh Le",
                    "I have a Bachelor's degree in Computer Science",
                    "I got it from San Jose State University in 2020",
                    "I know HTML, CSS, Javascript, React, MySQL, mongoDB, Java, and C++",
                    "This website is written from scratch using React",
                    "Please check below for some of my proudest projects"    
                ].map((t, i) => <Line key={t}
                                order={i+1}
                                active={active}
                                    >
                                        {t}
                                    </Line>)}
            </Canvas>
            <IntroSection active={active}>
                <ProfilePicture active={active}/>
                <Slogan active={active}>
                    Computer Scientist - Front End Developer
                </Slogan>
            </IntroSection>
        </Wrapper>
    );
}



export default Header;


