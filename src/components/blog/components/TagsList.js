import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useTagsList from "../redux/useTagsList";

import '../css/TagsList.css';
import useDataInitialized from "../redux/useDataInitialized";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";


const TagsList = () => {
    const dataInitialized = useDataInitialized();

    const {tags, featureImage, error} = useTagsList();
    
    

    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(""), []);

    useEffect(() => {
        if(dataInitialized) {
            setFeatureImageURL(featureImage.url);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataInitialized, featureImage.url]);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/tag/" + idInfo.name)
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
            <Title title="Tags"/>
            <SubTitle>
                List of all Tags
            </SubTitle>
            <div className="tags-list">
                {
                    tags.map((t)  => (
                        <Tag
                            key={t.name}
                            onClickHandleMaker={onClickHandleMaker}
                            idInfo={t.idInfo}
                            name={t.name}
                        />
                    ))
                }
            </div>
        </>) : (<LoadingPage />)
    );
}

export default TagsList;


const Tag = ({onClickHandleMaker, idInfo, name}) => {
    const onClickHandle = onClickHandleMaker(idInfo);

    return (
        <div className="tag"
            onClick = {onClickHandle}
        >
            {name}
        </div>
    )
}