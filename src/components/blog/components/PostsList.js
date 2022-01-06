import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSingleTagPageActions, useFeatureImageActions, useSingleCategoryActions, useSingleDatePageActions, useErrorActions } from "../redux/useActions";



import Title from "./Title";
import SubTitle from "./SubTitle";
import EntriesList from "./EntriesList";

import '../css/CategoryPosts.css';
import { VERTICAL_LIST } from "./EntriesList";
import useSingleCategory from "../redux/useSingleCategory";
import useSingleTagPage from "../redux/useSingleTagPage";
import useSingleDatePage from "../redux/useSingleDatePage";
import useDataInitialized from "../redux/useDataInitialized";
import LoadingPage from "./LoadingPage";

export const PL_SINGLE_TAG_PAGE = "TYPE/POSTS_LIST/SINGLE_TAG_PAGE";
export const PL_SINGLE_CATEGORY = "TYPE/POSTS_LIST/SINGLE_CATEGORY";
export const PL_SINGLE_DATE_PAGE = "TYPE/POSTS_LIST/SINGLE_DATE_PAGE";

const PostsList = ({type}) => {
    const dataInitialized = useDataInitialized();
    
    // Get props based on type of list
    const [setCurrentItem, setCurrentPage, setCurrentPagi,
        title, totalPosts, numItemsPerPage, numPagiButtons, currentPage, currentPagi, featureImage,
        displayedPosts, endPrev, endNext, subtitle, dataReady    
    ] = useProps(type);
    

    //Create onClickHandle for each of item on the list
    const history = useHistory();
    const {setFeatureImageURL} = useFeatureImageActions();

    const onClickHandleMakerPost = (idIf) => {
        return () => {
            history.push("/post/" + idIf.slug)
        }   
    }

    //set feature image and change current item to display appropriately
    const {idInfo} = useParams();
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(""), []);
    
    useEffect(() => {
        if(dataInitialized){
            setCurrentItem(idInfo);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idInfo, dataInitialized]);


    useEffect(() => {
        if(dataReady)
            setFeatureImageURL(featureImage.url);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataReady]);


    return (
        (dataReady)?
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
                    dataReady={dataReady}
                    />       
        </>)
        :(
            <LoadingPage />
        )
    );
}

export default PostsList;


const useProps = (type) => {
    let useData  = () => {},
            useActions= () => {}
            ;
    
    if(type === PL_SINGLE_TAG_PAGE){
        useData = useSingleTagPage;
        useActions = useSingleTagPageActions;
        
    }

    if(type === PL_SINGLE_CATEGORY) {
        useData = useSingleCategory;
        useActions = useSingleCategoryActions;
        
    }

    if(type === PL_SINGLE_DATE_PAGE){
        useData = useSingleDatePage;
        useActions = useSingleDatePageActions;
    }

    
    let data = useData();
    let {title, name, posts, meta_data, numItemsPerPage, numPagiButtons, currentPage, currentPagi, featureImage, dataReady} = data;
    let {setCurrentItem, setCurrentPage, setCurrentPagi} = useActions();
    
    const {displayedPosts, totalPosts, endPrev, endNext} = posts;

        
    let subtitle = "";
    
    if(type === PL_SINGLE_TAG_PAGE){
        title = (name !== "")? ("#" + name) : "";
        subtitle = "List of posts under #" + name;       
    }

    if(type === PL_SINGLE_CATEGORY) {
        subtitle = meta_data? meta_data.cat_subtitle : ""
    }

    if(type === PL_SINGLE_DATE_PAGE) {
        
        title = (name !== "")? ("On "  + name) : "";
        subtitle = "List of posted published on " + name;
    }

    return [setCurrentItem, setCurrentPage, setCurrentPagi,
        title, totalPosts, numItemsPerPage, numPagiButtons, currentPage, currentPagi, featureImage,
        displayedPosts, endPrev, endNext, subtitle, dataReady    
    ]
}


