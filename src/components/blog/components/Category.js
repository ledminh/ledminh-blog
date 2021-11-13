import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useEffect } from "react";
import { useBlogLocation } from "../redux/useActions";
import { LocationConstants } from "../redux/statuses/reducers/locationReducer";

import useData from "../redux/useData";




const Category = () => {
    
    const locationActions = useBlogLocation();
    const {categories} = useData();
    
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
                    numItemsPerPage={4}
                    numPagiButtons={3}
                    />
         
        </>
    );
}

export default Category;
