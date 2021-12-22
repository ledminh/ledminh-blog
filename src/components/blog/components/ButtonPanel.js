import '../css/ButtonsPanel.css'
import SocialShareButtons from './SocialShareButtons';


const ButtonsPanel = ({showFullPostStatus, showCommentsStatus,
                        toggleFullPost, toggleComments}) => {

    return (
        <div className="buttons-panel">
            <button className="continue-reading" onClick={toggleFullPost}>{showFullPostStatus ? "Minimize" : "Continue Reading"}</button>
            <SocialShareButtons />
            <button className="comment-toggle" onClick={toggleComments}>
                {(showCommentsStatus ? "CLOSE " : "READ ") + "COMMENT(S)"}
            </button>
        </div>
    );
}

export default ButtonsPanel;