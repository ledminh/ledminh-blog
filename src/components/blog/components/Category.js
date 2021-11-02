import { categories as fetchedCategories } from "../../../data";

import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";





const Category = ({setFeatureImageURL}) => {
    
    const [catList, setCatList] = useState([]);

    useEffect(() => {
        setFeatureImageURL("https://loremflickr.com/800/600");

        setCatList(fetchedCategories);

        return () => {
            setCatList([]);
        }
    }, [setFeatureImageURL]);


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
