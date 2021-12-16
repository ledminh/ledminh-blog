import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSingleTagPageActions, useFeatureImageActions, useSingleCategoryActions } from "../redux/useActions";



import Title from "./Title";
import SubTitle from "./SubTitle";
import EntriesList from "./EntriesList";

import '../css/CategoryPosts.css';
import { VERTICAL_LIST } from "./EntriesList";
import useSingleCategory from "../redux/useSingleCategory";
import useSingleTagPage from "../redux/useSingleTagPage";


export const PL_SINGLE_TAG_PAGE = "TYPE/POSTS_LIST/SINGLE_TAG_PAGE";
export const PL_SINGLE_CATEGORY = "TYPE/POSTS_LIST/SINGLE_CATEGORY";

const PostsList = ({type}) => {
    // Get props based on type of list
    const [setCurrentItem, setCurrentPage, setCurrentPagi,
        title, totalPosts, numItemsPerPage, numPagiButtons, currentPage, currentPagi, featureImage,
        displayedPosts, endPrev, endNext, subtitle    
    ] = useProps(type);
    

    //Create onClickHandle for each of item on the list
    const history = useHistory();
    const onClickHandleMakerPost = (idIf) => {
        return () => {
            history.push("/post/" + idIf.slug)
        }   
    }

    //set feature image and change current item to display appropriately
    const {idInfo} = useParams();
    const {setFeatureImageURL} = useFeatureImageActions();
    useEffect(() => {
        setCurrentItem(idInfo);
        setFeatureImageURL(featureImage? (featureImage.url): "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idInfo]);


    return (
        (title !== "")?
        (<>
            
            <Title title={title}/>
            <SubTitle>
                {subtitle}
            </SubTitle>
            <EntriesList
                    listType={VERTICAL_LIST}
                    numItemsTotal={totalPosts}
                    displayedEntries={displayedPosts}
                    endPrev={endPrev}
                    endNext={endNext}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    currentPagi={currentPagi}
                    setCurrentPagi={setCurrentPagi}
                    onClickHandleMaker={onClickHandleMakerPost}
                    numItemsPerPage={numItemsPerPage}
                    numPagiButtons={numPagiButtons}
                    />       
        </>)
        :(
            <div>Loading ...</div>
        )
    );
}

export default PostsList;


const useProps = (type) => {
    let useData  = () => {},
            useActions= () => {};
    
    if(type === PL_SINGLE_TAG_PAGE){
        useData = useSingleTagPage;
        useActions = useSingleTagPageActions;
        
    }

    if(type === PL_SINGLE_CATEGORY) {
        useData = useSingleCategory;
        useActions = useSingleCategoryActions;
        
    }

    

    let {title, name, posts, meta_data, numItemsPerPage, numPagiButtons, currentPage, currentPagi, featureImage} = useData();
    let {setCurrentItem, setCurrentPage, setCurrentPagi} = useActions();
    
    const {displayedPosts, totalPosts, endPrev, endNext} = posts;

        
    let subtitle = "";
    
    if(type === PL_SINGLE_TAG_PAGE){
        title = "#" + name;
        subtitle = "List of posts under #" + name;       
    }

    if(type === PL_SINGLE_CATEGORY) {
        subtitle = meta_data? meta_data.cat_subtitle : ""
    }

    return [setCurrentItem, setCurrentPage, setCurrentPagi,
        title, totalPosts, numItemsPerPage, numPagiButtons, currentPage, currentPagi, featureImage,
        displayedPosts, endPrev, endNext, subtitle    
    ]
}


/*
async function postsOnCat() {
    
    const res = await fetch("https://www.ledminh.com/wp-json/wp/v2/posts");

    let numP = res.headers.get("x-wp-total");
                    
    console.log(numP);

    
}

*/