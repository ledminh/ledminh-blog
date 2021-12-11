import Title from "./Title";
import SubTitle from "./SubTitle";
import MetaData from "./MetaData";
import ExcerptFullPostToggle from "./ExcerptFullPostToggle";
import ButtonsPanel from "./ButtonPanel";
import Comments from "./Comments";
import useData from "../redux/useData";
import { useHomeActions } from "../redux/useActions";
import useStatuses from "../redux/useStatuses";

const MainPost = () => {
    const {mainPost} = useData();
    const homeStatuses = useStatuses().home;
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
                showFullPostStatus={homeStatuses.showFullPost}
                excerpt={mainPost.excerpt}
                content={mainPost.content}
                />
            <ButtonsPanel
                toggleComments={actions.toggleComments}
                toggleFullPost={actions.toggleFullPost}
                showFullPostStatus={homeStatuses.showFullPost}
                showCommentsStatus={homeStatuses.showComments}
                />

            <Comments
                hideComments={actions.hideComments}
                showCommentsStatus={homeStatuses.showComments} 
                comments={mainPost.comments}
                />
        </>
    );
}

export default MainPost;