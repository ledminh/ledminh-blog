import '../css/ButtonsPanel.css'

const ButtonsPanel = ({setShowFullPost, showFullPost, setShowComments, showComments}) => {

    return (
        <div className="buttons-panel">
            <button className="continue-reading" onClick={() => setShowFullPost(!showFullPost)}>{showFullPost ? "Minimize" : "Continue Reading"}</button>
            <div className="share">
                <ul>
                    <li className="share-title"><i class="fas fa-share" /></li>
                    <li><a href="#" className="fa fa-facebook" /></li>
                    <li><a href="#" className="fa fa-twitter" /></li>
                    <li><a href="#" className="fa fa-google" /></li>
                    <li><a href="#" className="fa fa-instagram" /></li>
                    <li><a href="#" className="fa fa-youtube" /></li>
                </ul>
            </div>
            <button className="comment-toggle" onClick={() => setShowComments(!showComments)}>
                {(showComments ? "CLOSE " : "READ ") + "COMMENT(S)"}
            </button>
        </div>
    );
}

export default ButtonsPanel;