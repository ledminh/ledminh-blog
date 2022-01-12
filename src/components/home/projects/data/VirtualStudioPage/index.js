import Wrapper from "../Wrapper";
import DialogContent from "./DialogContent";

import useDialog from "../../../components/useDialog";


const VirtualStudioPage = () => {
    
    const {Dialog, openDialog} = useDialog(DialogContent, "Gallery");

    return (
        <>
            <Wrapper>
                <p>This app uses raytracing algorithm to model how a camera works in real life. Once open the app, user will see a setup with 1 camera, 2 planes, 3 balls with different sizes, and 2 lights. User can move and rotate the camera, its lenses can be zoom in or out. The 2 planes, one vertical and one horizontal, can also be moved, resized, and changed into different texture. User can also adjust the lights' intensitive, move and rotate them. The balls can also be resized and changed into different texture. User can add more lights and balls as well as remove them from the scene. After adjusting everything, user can press ENTER to “take a picture”. The picture will be shown up in the same folder with the app. </p>
                <p>It was written in C++ using openframeworks, one of the best frameworks I know so far for progammers with creativity. I coded this app in the Introduction to Graphic class I took at school and it became one of my most complex project I had ever done. I will go back to it some days in the future, but right now I’m focusing on React and web development.</p> 
                <p>Here is the link to the source code in Github: <a href="https://github.com/ledminh/virtual-studio">Virtual Studio Repo</a>. However, if you want to compile it, you need to install <a href="https://openframeworks.cc/">openframeworks</a> and put the folder “src” and “data” in the framworks’ folder as instructed in the github repo.</p>
                <p>Here is the demo video of the app I made to submit to the professor: <a href="https://youtu.be/IAdXVS3MYoI">demo video</a>.</p> 
                <p><button onClick={openDialog}>Click here to see some photos created by the app</button></p>
            </Wrapper>
            <Dialog/>
        </>
    );
}

export default VirtualStudioPage;