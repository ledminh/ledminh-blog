import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useAuthorsList from "../redux/useAuthorsList";

import '../css/AuthorsList.css';


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
                <ul>
                {
                    data.map((d)  => (
                        <li key={d.name}>
                            <Author
                                onClickHandleMaker={onClickHandleMaker}
                                idInfo={d.idInfo}
                                name={d.name}
                            />
                        </li>
                    ))
                }
                </ul>
            </div>
        </>
    );
}

export default AuthorsList;


const Author = ({onClickHandleMaker, idInfo, name}) => {
    const onClickHandle = onClickHandleMaker(idInfo);

    return (
        <span className="author"
            onClick = {onClickHandle}
        >
            {name}
        </span>
    )
}