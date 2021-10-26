import './css/MainPost.css';

import { useState } from 'react';

const MainPost = ({ title, feature_image_url, categories, tags, date_created, comments, author, excerpt, content, setShowComments, showComments
}) => {


    const [showFullPost, setShowFullPost] = useState(false);


    return (
        <article className="main-post">
            <img src={feature_image_url} className="feature-image" />
            <div className="title">{title}</div>
            <section className="meta-data">
                <span className="categories">
                    {categories.map((c, i) => <span className="item">
                        <span className="link-on-title">{c}</span>
                        <span>{(i == categories.length - 1) ? "" : ","}</span>
                    </span>)}
                </span>
                <span className="tags">
                    {tags.map((t, i) => <span className="item">
                        <span className="link-on-title">{t}</span>
                        <span>{(i == tags.length - 1) ? "" : ","}</span>
                    </span>)}
                </span>
                <span className="date-created"><span className="link-on-title">{date_created}</span></span>
                <span className="comment-link link-on-title" onClick={() => setShowComments(true)}>{comments.length} Comments</span>
                <span className="author"><span className="link-on-title">{author}</span></span>
            </section>
            <section className={"excerpt" + (showFullPost ? " hidden" : " show")}>
                {excerpt}
            </section>
            <div className={"content" + (showFullPost ? " show" : " hidden")}
                dangerouslySetInnerHTML={{ __html: content }} />

            <footer>
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
            </footer>
        </article>
    );

};

export default MainPost;