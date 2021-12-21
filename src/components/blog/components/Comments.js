import { useState, useEffect } from 'react';
import '../css/Comments.css';
import { addComment as saveToData} from '../../../data';



const Comments = ({ postID, hideComments, showCommentsStatus, comments }) => {
    
    const [commentsLocal, setCommentsLocal] = useState([]);

    useEffect(()=> {
        setCommentsLocal(comments);
    }, [comments]);

    const addComment = (commentObj) => {
        const newComments = commentsLocal.slice();
        newComments.unshift({author: commentObj.author, content: commentObj.content});


        setCommentsLocal(newComments);

        saveToData(commentObj);
    }
    

    return (

        <div className={"comments" + (showCommentsStatus ? " show" : " hidden")}>
            <div className="title">
                <span className="text"><h4>COMMENTS</h4></span>
                <span className="fa fa-close" onClick={hideComments} />
            </div>
            <AddComment 
                postID={postID} 
                addComment={addComment}/>

            {commentsLocal.map(c => (<Comment
                key={c.content}
                author={c.author}
                content={c.content}
                />)
            )}

        </div>
    );
};

export default Comments;

const processComment = (comment) => comment.split("\n")
                                            .map(s => "<p>" + s + "</p>")
                                            .join("");

const AddComment = ({postID, addComment}) => {

    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    
    

    const submitForm = () => {
        if(author === "") {
            setError("Author's name is empty!!!");
            return;
        }
        
        if(comment === "") {
            setError("Comment is empty!!!");
            return;
        }

        setError("");

        const CommentObj = {
            author: author,
            content: processComment(comment),
            postID: postID
        }

        setAuthor("");
        setComment("");
        
        

        addComment(CommentObj);
        

    }

    const keyDownListenner = (e) => {
        if(e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
    
            submitForm();
        }
        
    
    }

    
    useEffect(() => {
        

        document.addEventListener("keydown", keyDownListenner);


        return () => document.removeEventListener("keydown", keyDownListenner);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [author, comment]);

    return (
        <>
            {
                (error === "")? ""
                                : <div className="add-comment-error"><span className="content">{error}</span></div>
            }
            
            <form className="add-comment">
                <label htmlFor="author" id="lbl-author">Author</label>
                <input type="text" id="author" value={author} onChange={(e)=> setAuthor(e.target.value)}></input>
                <label htmlFor="comment" id="lbl-comment">Comment</label>
                <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                
                <div className="button-wrapper">
                    <button type="button" className="submit-button"
                        onClick={() => {
                            submitForm();
                        }}>
                        SUBMIT
                    </button>
                </div>            
            </form>
        </>
    );
}

const Comment = ({ author, content }) => {

    return (
        <div className="comment">
            <div className="author"><h5>{author}</h5></div>
            <div className="content" dangerouslySetInnerHTML={{__html: content}} />
        </div>
    );
};

