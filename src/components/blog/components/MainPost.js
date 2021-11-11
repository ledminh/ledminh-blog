import Title from "./Title";
import SubTitle from "./SubTitle";
import MetaData from "./MetaData";
import ExcerptFullPostToggle from "./ExcerptFullPostToggle";
import ButtonsPanel from "./ButtonPanel";
import Comments from "./Comments";
import useHomeData from "../redux/home/useHomeData";
import useHomeActions from "../redux/home/useHomeActions";
import useHomeStatus from "../redux/home/useHomeStatus";

const MainPost = () => {
    const data = useHomeData();
    const actions = useHomeActions();
    const status = useHomeStatus();

    const mainPost = data.posts[data.mainPostArrID];
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
                showFullPostStatus={status.showFullPost}
                excerpt={mainPost.excerpt}
                content={mainPost.content}
                />
            <ButtonsPanel
                toggleComments={actions.toggleComments}
                toggleFullPost={actions.toggleFullPost}
                showFullPostStatus={status.showFullPost}
                showCommentsStatus={status.showComments}
                />

            <Comments
                hideComments={actions.hideComments}
                showCommentsStatus={status.showComments} 
                comments={mainPost.comments}
                />
        </>
    );
}

export default MainPost;