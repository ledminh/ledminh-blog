import MainPost from "./MainPost";

import EntriesList from './EntriesList';

import { useFeatureImageURL, useHomeActions } from "../redux/useActions";

import useStatuses from "../redux/useStatuses";

import useData from "../redux/useData";
import { useEffect } from "react";

const Home = () => {

    const homeActions = useHomeActions();
    const {mainPost, otherPosts} = useData();
    const homeStatuses = useStatuses().home;

    const featureImg = useFeatureImageURL();
    
    useEffect(() => featureImg.setFeatureImageURL(mainPost.feature_image_url), [featureImg, mainPost]);
    
    

    const onClickHandleMakerOtherPosts = (id) => {
        return () => {
            homeActions.setMainPost(id);
            featureImg.setFeatureImageURL(mainPost.feature_image_url);
        }   
    }   
    
    
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


