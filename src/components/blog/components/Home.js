import MainPost from "./MainPost";

import EntriesList from './EntriesList';

import { useFeatureImageURL, useHomeActions } from "../redux/useActions";

import useStatuses from "../redux/useStatuses";

import useData from "../redux/useData";
import { useEffect } from "react";

const Home = () => {

    const homeActions = useHomeActions();
    const data = useData();
    const homeStatuses = useStatuses().home;

    const featureImg = useFeatureImageURL();
    
    useEffect(() => featureImg.setFeatureImageURL(data.posts[homeStatuses.mainPostArrID].feature_image_url), [featureImg, data.posts, homeStatuses.mainPostArrID]);
    
    

    const onClickHandleMakerOtherPosts = (id) => {
        return () => {    
            homeActions.setMainPostArrID(id);
            featureImg.setFeatureImageURL(data.posts[id].feature_image_url);
        }   
    }   

    const otherPosts = data.posts.filter((p, i) => i !== homeStatuses.mainPostArrID)
                                .map(oP => ({
                                    id: oP.arrID,
                                    feature_image_url: oP.feature_image_url,
                                    title: oP.title,
                                    meta_data: {
                                        date_created: oP.date_created,
                                        author: oP.author
                                    }
                                }));
    
    
    return (
        otherPosts ?
            (
            <>
                <MainPost />             

                <div className="separator" />

                <EntriesList 
                    entries={otherPosts}
                    currentPage={homeStatuses.currentPage}
                    setCurrentPage={homeActions.setCurrentPage}
                    currentPagi={homeStatuses.currentPagi}
                    setCurrentPagi={homeActions.setCurrentPagi}
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    numItemsPerPage={homeStatuses.numItemsPerPage}
                    numPagiButtons={homeStatuses.numPagiButtons}
                    
                    />
                
                
            </>
            ):
            (<span>Loading ... </span>)
    );
}

export default Home;


