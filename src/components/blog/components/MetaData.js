import '../css/MetaData.css';


const MetaData = ({showComments, categories, tags, date_created, comments, author}) => {

    return (
        <>
            <span className="categories">
                {
                    categories.map((c, i) => <span key={c} className="item">
                                                <span className="link-on-title">{c}</span>
                                                <span>{(i === categories.length - 1) ? "" : ","}</span>
                                            </span>)
                }
            </span>
            <span className="tags">
                {
                    tags.map((t, i) => <span key={t} className="item">
                                            <span className="link-on-title">{t}</span>
                                            <span>{(i === tags.length - 1) ? "" : ","}</span>
                                        </span>)
                }
            </span>
            <span className="date-created"><span className="link-on-title">{date_created}</span></span>
            <span className="comment-link link-on-title" onClick={showComments}>{comments.length} Comments</span>
            <span className="author"><span className="link-on-title">{author}</span></span>
        </>
    );
}

export default MetaData;