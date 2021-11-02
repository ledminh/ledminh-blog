import { useActions } from '../../../redux/useActions';
import { toggleFullPost } from '../redux/actions';
import { toggleComments } from '../redux/actions';


import { useSelector } from 'react-redux';


import '../css/ButtonsPanel.css'

const ButtonsPanel = () => {

    const actions = useActions({toggleFullPost, toggleComments});
    const status = useSelector(state => state.blog.func);


    return (
        <div className="buttons-panel">
            <button className="continue-reading" onClick={actions.toggleFullPost}>{status.showFullPost ? "Minimize" : "Continue Reading"}</button>
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
            <button className="comment-toggle" onClick={actions.toggleComments}>
                {(status.showComments ? "CLOSE " : "READ ") + "COMMENT(S)"}
            </button>
        </div>
    );
}

export default ButtonsPanel;