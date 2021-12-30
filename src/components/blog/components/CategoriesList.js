import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList, { GALLERY } from "./EntriesList";

import { useCategoriesListActions, useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";
import useCategoriesList from "../redux/useCategoriesList";




const CategoriesList = () => {
    
    const {data, numPagiButtons, currentPagi, featureImage} = useCategoriesList();
    const {numCategories, displayedCategories, endPrev, endNext, numItemsPerPage, currentPage} = data;

    
    const {setCurrentPage, setCurrentPagi} = useCategoriesListActions();
    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(featureImage.url), []);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/category/" + idInfo.slug)
        };
    }

    return (
        <>
            <Title title="Categories"/>
            <SubTitle>
                List of all categories
            </SubTitle>
            <EntriesList
                    listType={GALLERY}
                    numItemsTotal={numCategories}
                    displayedEntries={displayedCategories}
                    endPrev={endPrev}
                    endNext={endNext}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    currentPagi={currentPagi}
                    setCurrentPagi={setCurrentPagi}
                    onClickHandleMaker={onClickHandleMaker}
                    numItemsPerPage={numItemsPerPage}
                    numPagiButtons={numPagiButtons}
                    
                    />
      
         
        </>
    );
}

export default CategoriesList;
