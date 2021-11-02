import '../css/Comments.css';

import { useSelector } from 'react-redux';
import { useActions } from '../../../redux/useActions';
import { hideComments } from '../redux/actions';



const Comments = ({ setShowComments, comments }) => {
    const status = useSelector(state => state.blog.func);
    const actions = useActions({hideComments});


    return (
        <div className={"comments" + (status.showComments ? " show" : " hidden")}>
            <div className="title">
                <span className="text"><h4>COMMENTS</h4></span>
                <span className="fa fa-close" onClick={actions.hideComments} />
            </div>
            <form className="add-comment">
                <label htmlFor="author" id="lbl-author">Author</label>
                <input type="text" id="author"></input>
                <label htmlFor="comment" id="lbl-comment">Comment</label>
                <textarea id="comment" />
                <div className="button-wrapper">
                    <button type="button" className="submit-button"
                        onClick={() => {
                            console.log("submitted");
                        }}>
                        SUBMIT
                    </button>
                </div>
            </form>
            {comments.map(c => (<Comment
                key={c.content}
                author={c.author}
                content={c.content} />)
            )}

        </div>
    );
};

export default Comments;

const Comment = ({ author, content }) => {

    return (
        <div className="comment">
            <div className="author"><h5>{author}</h5></div>
            <div className="content">{content}</div>
        </div>
    );
};

