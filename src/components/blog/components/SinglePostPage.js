import { useParams } from "react-router";

const SinglePostPage = () => {

    const {slug} = useParams();
    return (
        <>
            {slug}
        </>
    )
}

export default SinglePostPage;