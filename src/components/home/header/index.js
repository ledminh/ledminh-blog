import { Wrapper, Canvas, Line, IntroSection, ProfilePicture,Slogan,  } from './styles';
import { useState } from 'react';

import { Brief_Intro } from './asset/constants';

const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <Wrapper active={active}
                onMouseOver={()=> setActive(true)}
                onMouseOut={()=> setActive(false)}
            >
            <Canvas active={active}>
                {Brief_Intro.map((t, i) => <Line key={t}
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


