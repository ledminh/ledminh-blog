import { categories as fetchedCategories } from "../../../data";

import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { CATEGORIES, useBlogLocation } from "../redux/location/reducer";





const Category = () => {
    
    const [catList, setCatList] = useState([]);
    const location = useBlogLocation();
    useEffect(() => {
        location.setLocation(CATEGORIES);
        
        setCatList(fetchedCategories);

        return () => {
            setCatList([]);
        }
    }, []);


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
                    entries={catList} 
                    onClickHandleMaker={onClickHandleMaker}
                    />
            <Pagination />
        </>
    );
}

export default Category;
