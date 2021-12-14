import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useCategoryActions, useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";
import useCategory from "../redux/useCategory";




const CategoryList = () => {
    
    const {data, numPagiButtons, currentPagi} = useCategory();
    const {numCategories, displayedCategories, endPrev, endNext, numItemsPerPage, currentPage} = data;

    
    const {setCurrentPage, setCurrentPagi} = useCategoryActions();
    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL("https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/should-you-noindex-category-archive-pages-5f16d5658b540-1520x800.png"), []);
    
    

    const onClickHandleMaker = (slug) => {

        return () => {
            history.push("/category/" + slug)
        };
    }

    return (
        <>
            <Title title="Categories"/>
            <SubTitle>
                List of all categories
            </SubTitle>
            <EntriesList 
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

export default CategoryList;
