import { Wrapper, Line, ReadMoreButton } from "./styles";

import { Intro_Paragraph } from "./asset/constants";
import useDialog from "../components/useDialog";
import DialogContent from "./DialogContent";

const Introduction = () => {
    
    const {Dialog, openDialog} = useDialog(DialogContent, "Introduction");

    return (
        <Wrapper>
            {Intro_Paragraph.map(t => (<Line key={t}>{t}</Line>))}
            <ReadMoreButton 
                onClick={openDialog}
                >... READ MORE ...                
            </ReadMoreButton>
            <Dialog />
        </Wrapper>
    );
}

export default Introduction;


