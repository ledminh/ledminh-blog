import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useAuthorsList from "../redux/useAuthorsList";

import '../css/AuthorsList.css';
import FeatureImage from "./FeatureImage";


const AuthorsList = () => {
    
    const authorsList = useAuthorsList(); 
    const {featureImage, data} = authorsList;
    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(featureImage.url), []);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/author/" + idInfo.slug)
        };
    }

    

    return (
        <>
            <Title title="Authors"/>
            <SubTitle>
                List of all authors
            </SubTitle>
            <div className="authors-list">
                {
                    data.map((d)  => (                        
                        <Author
                            key={d.name}
                            onClickHandleMaker={onClickHandleMaker}
                            idInfo={d.idInfo}
                            name={d.name}
                            slogan={d.slogan}
                            profilePictureURL={d.profilePicture.url}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default AuthorsList;


const Author = ({onClickHandleMaker, idInfo, name, slogan, profilePictureURL}) => {
    const onClickHandle = onClickHandleMaker(idInfo);

    return (
        <div className="author"
            onClick = {onClickHandle}
        >
            <FeatureImage 
                feature_image_url={profilePictureURL} 
                altText={name + " profile"}
                />
            <div className="name"><h4>{name}</h4></div>
            <div className="slogan">{slogan}</div>
        </div>
    )
}