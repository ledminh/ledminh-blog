import { useParams } from "react-router";
import { useEffect } from "react";
import { useSinglePostActions, useFeatureImageActions, useErrorActions } from "../redux/useActions";
import useSinglePost from "../redux/useSinglePost";

import "../css/SinglePostPage.css";
import { SinglePostPageErrorConstants as sppeConst } from "../assets/constants";
import Title from "./Title";
import SubTitle from "./SubTitle";
import MetaData from "./MetaData";
import Comments from "./Comments";
import ExcerptFullPostToggle from "./ExcerptFullPostToggle";
import SocialShareButtons from "./SocialShareButtons";
import { useLocation } from "react-router-dom";

import useDataInitialized from '../redux/useDataInitialized';
import LoadingPage from "./LoadingPage";
import  ErrorPage  from "./ErrorPage";


const SinglePostPage = () => {
    const dataInitialized = useDataInitialized();
    const {slug} = useParams();
    const {setCurrentSinglePost, showComments, hideComments} = useSinglePostActions();
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const {resetError} = useErrorActions();
    const {post, showCommentsStatus} = useSinglePost();
    const {data, dataReady, error} = post;

    const location = useLocation();

    useEffect(() => {
        if(dataInitialized){
            setCurrentSinglePost(slug);          

            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug, dataInitialized]);

    useEffect(() => {
        if(dataReady){
            setFeatureImageURL(data.featureImage.url);
        }
        else{
            setFeatureImageURL("");
        }   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataReady])
    

    

    return (
        (error.status)?
            <ErrorPage 
                error={error}
                title={sppeConst.title}
                message={sppeConst.message} />
            :
        (dataReady)?
        (
            <div className="single-post-page">
                <Title title={data.title} />
                <SubTitle>
                    <MetaData
                        showComments={showComments}
                        categories={data.categories}
                        tags= {data.tags}
                        date_created= {data.date_created}
                        comments={data.comments}
                        author={data.author}
                        />
                </SubTitle>
                <ExcerptFullPostToggle
                    showFullPostStatus={true}
                    content={data.content}
                    />
                <div className="social-share">
                    <SocialShareButtons 
                        url={"https://www.ledminh.dev/blog/post/" + location.pathname}
                        summary={data.excerpt}
                        hashtag={"#ledminh_writing"}
                        title={data.title}
                        webName={"LEDMINH BLOG"}
                        />
                </div>
                <Comments
                    hideComments={hideComments}
                    showCommentsStatus={showCommentsStatus} 
                    comments={data.comments}
                    postID={data.id}
                    />
            </div>
        ):
        (
            <LoadingPage />
        )
    )
}

export default SinglePostPage;