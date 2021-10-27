import './css/MainPost.css';

import { useState } from 'react';

const MainPost = ({ title, feature_image_url, 
                    categories, tags, date_created, 
                    comments, author, excerpt, content, 
                    setShowComments, showComments
                    }) => 
{


    const [showFullPost, setShowFullPost] = useState(false);


    return (
        <article className="main-post"> 
            <FeatureImage feature_image_url ={feature_image_url} />
            
            <Title title={title} />
            
            <SubTitle>
                <MetaData 
                    categories={categories}
                    tags={tags}
                    date_created={date_created}
                    setShowComments={setShowComments}
                    comments={comments}
                    author={author}                
                />
            </SubTitle>

            <ExcerptFullPostToggle 
                showFullPost={showFullPost} 
                excerpt={excerpt}
                content={content}
                />

           <ButtonsPanel 
                setShowFullPost={setShowFullPost}
                showFullPost={showFullPost}
                setShowComments={setShowComments}
                showComments={showComments}
                />

        </article>
    );

};

export default MainPost;

const ExcerptFullPostToggle = ({showFullPost, excerpt, content}) => {

    return (
        <>
            <section className={"excerpt" + (showFullPost ? " hidden" : " show")}>
                {excerpt}
            </section>
            <div className={"content" + (showFullPost ? " show" : " hidden")}
                dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

const MetaData = ({categories, tags, date_created, setShowComments, comments, author}) => {

    return (
        <>
            <span className="categories">
                {
                    categories.map((c, i) => <span className="item">
                                                <span className="link-on-title">{c}</span>
                                                <span>{(i == categories.length - 1) ? "" : ","}</span>
                                            </span>)
                }
            </span>
            <span className="tags">
                {
                    tags.map((t, i) => <span className="item">
                                            <span className="link-on-title">{t}</span>
                                            <span>{(i == tags.length - 1) ? "" : ","}</span>
                                        </span>)
                }
            </span>
            <span className="date-created"><span className="link-on-title">{date_created}</span></span>
            <span className="comment-link link-on-title" onClick={() => setShowComments(true)}>{comments.length} Comments</span>
            <span className="author"><span className="link-on-title">{author}</span></span>
        </>
    );
}

const SubTitle  = ({children}) => {

    return (
        <div className="subtitle">
            {children}
        </div>
    );
}

const FeatureImage = ({feature_image_url}) => (
    <img src={feature_image_url} className="feature-image" />
);

const Title = ({title}) => (
    <div className="title">{title}</div>
);

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