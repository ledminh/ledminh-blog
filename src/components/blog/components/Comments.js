import '../css/Comments.css';

const Comments = ({ showComments, setShowComments, comments }) => {

    return (
        <div className={"comments" + (showComments ? " show" : " hidden")}>
            <div className="title">
                <span className="text"><h4>COMMENTS</h4></span>
                <span className="fa fa-close" onClick={() => setShowComments(false)} />
            </div>
            <form className="add-comment">
                <label for="author" id="lbl-author">Author</label>
                <input type="text" id="author"></input>
                <label for="comment" id="lbl-comment">Comment</label>
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
                key={c}
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

