import '../css/ButtonsPanel.css'

const ButtonsPanel = ({showFullPostStatus, showCommentsStatus,
                        toggleFullPost, toggleComments}) => {

    return (
        <div className="buttons-panel">
            <button className="continue-reading" onClick={toggleFullPost}>{showFullPostStatus ? "Minimize" : "Continue Reading"}</button>
            <div className="share">
                <ul>
                    <li className="share-title"><i className="fas fa-share" /></li>
                    <li><i className="fa fa-facebook" /></li>
                    <li><i className="fa fa-twitter" /></li>
                    <li><i className="fa fa-google" /></li>
                    <li><i className="fa fa-instagram" /></li>
                    <li><i className="fa fa-youtube" /></li>
                </ul>
            </div>
            <button className="comment-toggle" onClick={toggleComments}>
                {(showCommentsStatus ? "CLOSE " : "READ ") + "COMMENT(S)"}
            </button>
        </div>
    );
}

export default ButtonsPanel;