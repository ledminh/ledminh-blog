import { useParams } from "react-router";
import { useEffect } from "react";
import { useSinglePostActions, useFeatureImageActions } from "../redux/useActions";
import useSinglePost from "../redux/useSinglePost";

import "../css/SinglePostPage.css";

import Title from "./Title";
import SubTitle from "./SubTitle";
import MetaData from "./MetaData";
import Comments from "./Comments";
import ExcerptFullPostToggle from "./ExcerptFullPostToggle";
import SocialShareButtons from "./SocialShareButtons";
import { useLocation } from "react-router-dom";

const SinglePostPage = () => {

    const {slug} = useParams();
    const {setCurrentSinglePost, showComments, hideComments} = useSinglePostActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {post, showCommentsStatus} = useSinglePost();
    

    const location = useLocation();

    useEffect(() => {
        setCurrentSinglePost(slug);
        setFeatureImageURL(post.feature_image_url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug, post]);

    
    return (
        post.title?
        (
            <div className="single-post-page">
                <Title title={post.title} />
                <SubTitle>
                    <MetaData
                        showComments={showComments}
                        categories={post.categories}
                        tags= {post.tags}
                        date_created= {post.date_created}
                        comments={post.comments}
                        author={post.author}
                        />
                </SubTitle>
                <ExcerptFullPostToggle
                    showFullPostStatus={true}
                    content={post.content}
                    />
                <div className="social-share">
                    <SocialShareButtons 
                        url={"https://www.ledminh.dev/blog/post/" + location.pathname}
                        summary={post.excerpt}
                        hashtag={"#ledminh_writing"}
                        title={post.title}
                        webName={"LEDMINH BLOG"}
                        />
                </div>
                <Comments
                    hideComments={hideComments}
                    showCommentsStatus={showCommentsStatus} 
                    comments={post.comments}
                    postID={post.id}
                    />
            </div>
        ):
        (
        <>Loading ... </>
        )
    )
}

export default SinglePostPage;