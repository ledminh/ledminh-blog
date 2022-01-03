import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useFeatureImageActions, useAuthorPageActions } from "../redux/useActions";
import useAuthorPage from "../redux/useAuthorPage";
import useDataInitialized from "../redux/useDataInitialized";

import EntriesList from "./EntriesList";
import SubTitle from "./SubTitle";
import Title from "./Title";
import '../css/AuthorPage.css';
import { VERTICAL_LIST } from "./EntriesList";
import LoadingPage from "./LoadingPage";



const AuthorPage = () => {
    const {dataReady, name, slogan, featureImage, profilePicture, bio, posts, currentPage, currentPagi, numItemsPerPage, numPagiButtons } = useAuthorPage();
    const {totalPosts, displayedPosts, endPrev, endNext} = posts;
    const {setCurrentItem, setCurrentPage, setCurrentPagi} = useAuthorPageActions();

    const dataInitialized = useDataInitialized();
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
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(""), []);
    
    useEffect(() => {
        if(dataInitialized) {
            setCurrentItem(idInfo);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idInfo, dataInitialized]);


    useEffect(() => {
        if(dataReady) {
            setFeatureImageURL(featureImage.url);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataReady, featureImage.url]);


    return (
        (dataReady)?
        (<div className="author-page">
            <Title title={name}/>
            <SubTitle>
                {slogan}
            </SubTitle>
            <div className="author-info">
                <img src={profilePicture.url} alt={"profile picture of " + name} />
                <div className="bio">
                    <h4><p>Brief introduction of {name}</p></h4>
                    <div className="text" dangerouslySetInnerHTML={{__html: bio.text}}/>
                </div>             
            </div>
            <div className="separator"/>
            <div className="posts-list"><h3>Posts written by {name}</h3></div>
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
        </div>)
        :(
            <LoadingPage />
        )
    );
}

export default AuthorPage;
