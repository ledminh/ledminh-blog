import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";

import { useEffect } from "react";
import { CATEGORIES, useBlogLocation } from "../redux/location/reducer";

import useCategoryData from "../redux/category/useCategoryData";




const Category = () => {
    
    const data = useCategoryData();
    const location = useBlogLocation();
    
    useEffect(() => location.setLocation(CATEGORIES), [location]);


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
                    entries={data.catsList} 
                    onClickHandleMaker={onClickHandleMaker}
                    numItemsPerPage={4}
                    numPagiButtons={3}
                    />
         
        </>
    );
}

export default Category;
