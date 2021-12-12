import MainPost from "./MainPost";

import EntriesList from './EntriesList';

import { useFeatureImageURL, useHomeActions } from "../redux/useActions";


import useHome from "../redux/useHome";
import { useEffect } from "react";

const Home = () => {

    const homeActions = useHomeActions();
    const {data, numItemsPerPage, numPagiButtons, currentPage, currentPagi} = useHome();
    const {mainPost, otherPosts} = data;

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
                    currentPage={currentPage}
                    setCurrentPage={homeActions.setCurrentPage}
                    currentPagi={currentPagi}
                    setCurrentPagi={homeActions.setCurrentPagi}
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    numItemsPerPage={numItemsPerPage}
                    numPagiButtons={numPagiButtons}
                    
                    />
                
                
            </>
            ):
            (<span>Loading ... </span>)
    );
}

export default Home;


