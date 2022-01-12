import { useState } from "react";
import styled from "styled-components";
import { imgs } from "./data";


const ModalContent = () => {
    const [mainImg, setMainImg] = useState(imgs[0]);

    return (
        <>
            <Title><span>GALLERY</span></Title>
            <Gallery>
                <MainImg><img src={mainImg} alt="taken from Virtual Studio"/></MainImg>
                <Others>
                    {
                        imgs.filter((image) => image !== mainImg)
                            .map((image) => <img key={image}
                                                alt="taken from Virtual Studio"
                                                src={image} 
                                                onClick={() => setMainImg(image)}/>)
                    }
                </Others>
            </Gallery>
        </>      
    );
}

export default ModalContent;


const Title = styled.div`
    text-align: center;    
    
    margin-bottom: 20px;
    span {
        background-color: #1A2428;
        color: white;
        font-size: 25px;
        padding: 10px 40px;

        border-radius: 40px;

        @media (max-width: 545px) {
            font-size: 18px;
    
        }
    }
`

const Gallery = styled.div`
    display: flex;
    flex-flow: column wrap;
    
    justify-content: space-between;
`

const MainImg = styled.div`
    
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    
    img {
        width: 100%;
        margin: auto;
    }
`

const Others = styled.div`
    display: flex;
    flex-flow: row wrap;
    
    justify-content: space-around;

    margin-top: 10px;

    img {
        width: 20%;
        
        border-radius: 50%;

        cursor: pointer;

        @media (max-width: 430px) {
            width: 16%;
    
        }
        :hover {
            box-shadow: 0 0 6px black;
            opacity: .7;
        }
    }
    
`