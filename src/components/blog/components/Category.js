import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useEffect } from "react";
import { useBlogLocation, useCategoryActions } from "../redux/useActions";
import { LocationConstants } from "../redux/statuses/reducers/locationReducer";

import useData from "../redux/useData";
import useStatuses from "../redux/useStatuses";




const Category = () => {
    
    const locationActions = useBlogLocation();
    const {categories} = useData();
    const categoryStatuses = useStatuses().category;
    
    const categoryActions = useCategoryActions();
    useEffect(() => locationActions.setLocation(LocationConstants.CATEGORIES), [locationActions]);


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
