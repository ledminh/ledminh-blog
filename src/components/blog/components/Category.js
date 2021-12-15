import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSingleCategoryActions, useFeatureImageActions } from "../redux/useActions";


import useSingleCategory from "../redux/useSingleCategory";

import Title from "./Title";
import SubTitle from "./SubTitle";
import EntriesList from "./EntriesList";

import '../css/CategoryPosts.css';
import { VERTICAL_LIST } from "./EntriesList";

const Category = () => {
    const {slug} = useParams();
    const {setCurrentCategory, setCurrentPage, setCurrentPagi} = useSingleCategoryActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {name, meta_data, feature_image_url, posts, numItemsPerPage, numPagiButtons, currentPage, currentPagi} = useSingleCategory();
    
    const {displayedPosts, endPrev, endNext} = posts;

    const history = useHistory();

    const onClickHandleMakerOtherPosts = (idInfo) => {
        return () => {
            history.push("/post/" + idInfo.slug)
        }   
    }


    
    useEffect(() => {
        setCurrentCategory(slug);
        setFeatureImageURL(feature_image_url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    return (
        meta_data ?
        (<>
            <Title title={name}/>
            <SubTitle>
                {meta_data.cat_subtitle}
            </SubTitle>
            <EntriesList
                    listType={VERTICAL_LIST}
                    numItemsTotal={posts.totalPosts}
                    displayedEntries={displayedPosts}
                    endPrev={endPrev}
                    endNext={endNext}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    currentPagi={currentPagi}
                    setCurrentPagi={setCurrentPagi}
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    numItemsPerPage={numItemsPerPage}
                    numPagiButtons={numPagiButtons}
                    />       
        </>)
        :(
            <div>Loading ...</div>
        )
    );
}

export default Category;



/*
async function postsOnCat() {
    
    const res = await fetch("https://www.ledminh.com/wp-json/wp/v2/posts");

    let numP = res.headers.get("x-wp-total");
                    
    console.log(numP);

    
}

*/