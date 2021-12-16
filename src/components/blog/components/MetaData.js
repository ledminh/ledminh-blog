import { useHistory } from 'react-router';

import '../css/MetaData.css';


const MetaData = ({showComments, categories, tags, date_created, comments, author}) => {
    const history = useHistory();

    return (
        <>
            <span className="categories">
                <span className="title link-on-title" onClick={() => history.push("/categories")}>Categories: </span>
                {
                    categories.map((c, i) => <span key={c.slug} className="item">
                                                <span className="link-on-title" onClick={() => history.push("/category/" + c.slug)}>{c.title}</span>
                                                <span>{(i === categories.length - 1) ? "" : ","}</span>
                                            </span>)
                }
            </span>
            <span className="tags">
                <span className="title link-on-title" onClick={() => history.push("/tags")}>Tags: </span>
                {
                    tags.map((t, i) => <span key={t} className="item">
                                            <span className="link-on-title" onClick={() => history.push("/tag/" + t)}>{t}</span>
                                            <span>{(i === tags.length - 1) ? "" : ","}</span>
                                        </span>)
                }
            </span>
            <span className="date-created">
                <span className="title link-on-title" onClick={() => history.push("/dates")}>Date created: </span>
                <span className="link-on-title" onClick={() => history.push("/date/" + date_created.slug)}>{date_created.text}</span>
            </span>
            <span className="comment-link link-on-title" onClick={showComments}>{comments.length} Comments</span>
            <span className="author"><span className="title link-on-title">Author: </span><span className="link-on-title" onClick={() => history.push("/authors")}>{author}</span></span>
        </>
    );
}

export default MetaData;