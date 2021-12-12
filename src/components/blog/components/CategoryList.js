import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useCategoryActions, useFeatureImageURL } from "../redux/useActions";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useCategory from "../redux/useCategory";




const CategoryList = () => {
    
    const [entries, setEntries] = useState([]);
    
    const {data, numItemsPerPage,numPagiButtons, currentPagi, currentPage} = useCategory();
    const {categories} = data;

    
    const categoryActions = useCategoryActions();
    
    const featureImg = useFeatureImageURL();
    
    const history = useHistory()
    
    useEffect(() => featureImg.setFeatureImageURL("https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/should-you-noindex-category-archive-pages-5f16d5658b540-1520x800.png"), [featureImg]);
    
    useEffect(() => {
        const catsList = categories.map((c) => ({...c, id: c.slug}));
        setEntries(catsList);
    }, [categories]);

    const onClickHandleMaker = (slug) => {

        return () => history.push("/category/" + slug);
    }

    return (
        <>
            <Title title="Categories"/>
            <SubTitle>
                List of all categories
            </SubTitle>
            <EntriesList 
                    entries={entries} 
                    onClickHandleMaker={onClickHandleMaker}
                    numItemsPerPage={numItemsPerPage}
                    numPagiButtons={numPagiButtons}
                    currentPage={currentPage}
                    setCurrentPage={categoryActions.setCurrentPage}
                    currentPagi={currentPagi}
                    setCurrentPagi={categoryActions.setCurrentPagi}
                    />
         
        </>
    );
}

export default CategoryList;
