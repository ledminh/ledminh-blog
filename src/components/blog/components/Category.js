import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useCategoryActions, useFeatureImageURL } from "../redux/useActions";

import useData from "../redux/useData";
import useStatuses from "../redux/useStatuses";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";




const Category = () => {
    
    const [entries, setEntries] = useState([]);

    const {categories} = useData();
    const categoryStatuses = useStatuses().category;
    
    const categoryActions = useCategoryActions();
    
    const featureImg = useFeatureImageURL();
    
    const history = useHistory()
    
    useEffect(() => featureImg.setFeatureImageURL("https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/should-you-noindex-category-archive-pages-5f16d5658b540-1520x800.png"), [featureImg]);
    
    useEffect(() => {
        const catsList = categories.map((c) => ({...c, idInfo: c.slug}));
        setEntries(catsList);
    }, [categories]);

    const onClickHandleMaker = (slug) => {

        return () => history.push("/blog/category/" + slug);
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
