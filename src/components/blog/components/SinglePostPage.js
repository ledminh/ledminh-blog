import { useParams } from "react-router";
import { useEffect } from "react";
import { useSinglePostActions, useFeatureImageActions } from "../redux/useActions";
import useSinglePost from "../redux/useSinglePost";

import Title from "./Title";
import SubTitle from "./SubTitle";
import MetaData from "./MetaData";
import Comments from "./Comments";
import ExcerptFullPostToggle from "./ExcerptFullPostToggle";

const SinglePostPage = () => {

    const {slug} = useParams();
    const {setCurrentSinglePost, showComments, hideComments} = useSinglePostActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {post, showCommentsStatus} = useSinglePost();
    

    useEffect(() => {
        setCurrentSinglePost(slug);
        setFeatureImageURL(post.feature_image_url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);


    return (
        post.title?
        (
            <>
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
                
                <Comments
                    hideComments={hideComments}
                    showCommentsStatus={showCommentsStatus} 
                    comments={post.comments}
                    />
            </>
        ):
        (
        <>Loading ... </>
        )
    )
}

export default SinglePostPage;