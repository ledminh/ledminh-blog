import Title from "./Title";
import SubTitle from "./SubTitle";
import MetaData from "./MetaData";
import ExcerptFullPostToggle from "./ExcerptFullPostToggle";
import ButtonsPanel from "./ButtonPanel";
import Comments from "./Comments";
import useData from "../redux/useData";
import { useHomeActions } from "../redux/useActions";
import useStatuses from "../redux/useStatuses";
import useHome from "../redux/useHome";

const MainPost = () => {
    const {data, showComments, showFullPost} = useHome();
    const {mainPost} = data;


    const actions = useHomeActions();

    
    return (
        <>
            <Title title={mainPost.title} />
            <SubTitle>
                <MetaData
                    showComments={actions.showComments}
                    categories={mainPost.categories}
                    tags= {mainPost.tags}
                    date_created= {mainPost.date_created}
                    comments={mainPost.comments}
                    author={mainPost.author}
                    />
            </SubTitle>
            
            <ExcerptFullPostToggle
                showFullPostStatus={showFullPost}
                excerpt={mainPost.excerpt}
                content={mainPost.content}
                />
            <ButtonsPanel
                toggleComments={actions.toggleComments}
                toggleFullPost={actions.toggleFullPost}
                showFullPostStatus={showFullPost}
                showCommentsStatus={showComments}
                />

            <Comments
                hideComments={actions.hideComments}
                showCommentsStatus={showComments} 
                comments={mainPost.comments}
                />
        </>
    );
}

export default MainPost;