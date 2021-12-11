import MainPost from "./MainPost";

import EntriesList from './EntriesList';

import { useFeatureImageURL, useHomeActions } from "../redux/useActions";

import useStatuses from "../redux/useStatuses";

import useData from "../redux/useData";
import { useEffect } from "react";

const Home = () => {

    const homeActions = useHomeActions();
    const {homePosts} = useData();
    const homeStatuses = useStatuses().home;

    const featureImg = useFeatureImageURL();
    
    useEffect(() => featureImg.setFeatureImageURL(homePosts[homeStatuses.mainPostArrID].feature_image_url), [featureImg, homePosts, homeStatuses.mainPostArrID]);
    
    

    const onClickHandleMakerOtherPosts = (idInfo) => {
        return () => {    
            homeActions.setMainPostArrID(idInfo);
            featureImg.setFeatureImageURL(homePosts[idInfo].feature_image_url);
        }   
    }   

    const otherPosts = homePosts.filter((p, i) => i !== homeStatuses.mainPostArrID)
                                .map(oP => ({
                                    idInfo: oP.arrID,
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


