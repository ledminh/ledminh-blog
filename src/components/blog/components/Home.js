import MainPost from "./MainPost";

import EntriesList, { GALLERY } from './EntriesList';

import { useFeatureImageActions, useHomeActions } from "../redux/useActions";


import useHome from "../redux/useHome";
import { useEffect } from "react";

const Home = () => {

    const homeActions = useHomeActions();
    const {data, numPagiButtons, currentPagi} = useHome();
    const {mainPost, numPosts, displayedPosts, endPrev, endNext, numItemsPerPage, currentPage} = data;

    const {setFeatureImageURL} = useFeatureImageActions();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(mainPost.feature_image_url), [mainPost.feature_image_url]);
    
    

    const onClickHandleMakerOtherPosts = (idInfo) => {
        return () => {
            homeActions.setMainPost(idInfo.id);
        }   
    }   
    
    
    return (
        displayedPosts ?
            (
            <>
                <MainPost />             

                <div className="separator" />

                <EntriesList
                    listType={GALLERY}
                    numItemsTotal={numPosts}
                    displayedEntries={displayedPosts}
                    endPrev={endPrev}
                    endNext={endNext}
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


