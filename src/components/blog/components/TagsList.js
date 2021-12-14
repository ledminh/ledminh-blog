import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useTagsList from "../redux/useTagsList";

import '../css/TagsList.css';


const TagsList = () => {
    
    const {tags} = useTagsList();
    

    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL("https://cdn5.vectorstock.com/i/1000x1000/28/19/set-blank-vintage-frames-gift-tags-labels-vector-13982819.jpg"), []);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/tag/" + idInfo.name)
        };
    }

    return (
        <>
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
            
      
         
        </>
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