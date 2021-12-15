import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSingleTagPageActions, useFeatureImageActions } from "../redux/useActions";


import useSingleTagPage from "../redux/useSingleTagPage";

import Title from "./Title";
import SubTitle from "./SubTitle";
import EntriesList from "./EntriesList";

import '../css/CategoryPosts.css';
import { VERTICAL_LIST } from "./EntriesList";

const SingleTagPage = () => {
    const {tagName} = useParams();
    const {setCurrentTag, setCurrentPage, setCurrentPagi} = useSingleTagPageActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {name, posts, numItemsPerPage, numPagiButtons, currentPage, currentPagi} = useSingleTagPage();
    
    const {displayedPosts, endPrev, endNext} = posts;

    const history = useHistory();

    const onClickHandleMakerPost = (idInfo) => {
        return () => {
            history.push("/post/" + idInfo.slug)
        }   
    }


    
    useEffect(() => {
        setCurrentTag(tagName);
        setFeatureImageURL("https://cdn5.vectorstock.com/i/1000x1000/28/19/set-blank-vintage-frames-gift-tags-labels-vector-13982819.jpg")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tagName]);

    return (
        (name !== "")?
        (<>
            <Title title={"# " + name}/>
            <SubTitle>
                {"List of posts under #" + name}
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

export default SingleTagPage;



/*
async function postsOnCat() {
    
    const res = await fetch("https://www.ledminh.com/wp-json/wp/v2/posts");

    let numP = res.headers.get("x-wp-total");
                    
    console.log(numP);

    
}

*/