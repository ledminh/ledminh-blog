import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useCategoryActions, useFeatureImageURL } from "../redux/useActions";

import useData from "../redux/useData";
import useStatuses from "../redux/useStatuses";
import { useEffect } from "react";




const Category = () => {
    
    const {categories} = useData();
    const categoryStatuses = useStatuses().category;
    
    const categoryActions = useCategoryActions();
    
    const featureImg = useFeatureImageURL();
    
    
    useEffect(() => featureImg.setFeatureImageURL("https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/should-you-noindex-category-archive-pages-5f16d5658b540-1520x800.png"), [featureImg]);
    const onClickHandleMaker = () => {

        return () => {

        }
    }

    return (
        <>
            <Title title="Categories"/>
            <SubTitle>
                List of all categories
            </SubTitle>
            <EntriesList 
                    entries={categories} 
                    onClickHandleMaker={onClickHandleMaker}
                    numItemsPerPage={categoryStatuses.numItemsPerPage}
                    numPagiButtons={categoryStatuses.numPagiButtons}
                    currentPage={categoryStatuses.currentPage}
                    setCurrentPage={categoryActions.setCurrentPage}
                    currentPagi={categoryStatuses.currentPagi}
                    setCurrentPagi={categoryActions.setCurrentPagi}
                    />
         
        </>
    );
}

export default Category;
