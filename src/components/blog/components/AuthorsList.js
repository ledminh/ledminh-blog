import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useAuthorsList from "../redux/useAuthorsList";

import '../css/AuthorsList.css';
import FeatureImage from "./FeatureImage";
import useDataInitialized from "../redux/useDataInitialized";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";


const AuthorsList = () => {
    const dataInitialized = useDataInitialized();

    const authorsList = useAuthorsList(); 
    const {featureImage, data, error} = authorsList;
    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(""), []);
    
    useEffect(() => {
        if(dataInitialized)
            setFeatureImageURL(featureImage.url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataInitialized]);

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/author/" + idInfo.slug)
        };
    }

    

    return (
        error.status?
        <ErrorPage 
                error={error}
                title={"Opps!!! There's some error occurs."}
                message={"Might be the data source is invalid"}
            />:
        dataInitialized?
        (<>
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
        </>) : (<LoadingPage />)
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