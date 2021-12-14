import { useParams } from "react-router";
import { useEffect } from "react";
import { useSinglePostActions, useFeatureImageActions } from "../redux/useActions";
import useSinglePost from "../redux/useSinglePost";


const SinglePostPage = () => {

    const {slug} = useParams();
    const {setCurrentSinglePost} = useSinglePostActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {post} = useSinglePost();
    
    useEffect(() => {
        setCurrentSinglePost(slug);
        setFeatureImageURL(post.feature_image_url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);


    return (
        <>
            {slug}
        </>
    )
}

export default SinglePostPage;