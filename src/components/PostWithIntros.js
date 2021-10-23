import '../css/PostWithIntros.css';
import {posts as fetchedPosts} from '../data';

import { useEffect, useState } from 'react';

const PostWithIntros = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {

        setPosts(fetchedPosts);


        return () => {
            setPosts([]);
        };
    }, []);



    return (
        <MainPost
            title={posts[0].title}
            feature_image_url={posts[0].feature_image_url}
            categories={posts[0].categories}
            tags= {posts[0].tags}
            date_created= {posts[0].date_created}
            comments={posts[0].comments}
            author={posts[0].author}
            excerpt={posts[0].excerpt}
            content={posts[0].content}                                
        />
    );

};


const MainPost = ({title, feature_image_url, categories, tags, date_created, comments, author, excerpt, content}) => (
    <article className="post-with-intro">
        <img src={feature_image_url} className="feature-image" />
        <div className="title">{title}</div>
        <section className="meta-data">
            <span className="categories">{categories.map(c => <span className="item">{c}</span>)}</span>
            <span className="tags">{tags.map(t => <span className="item">{t}</span>)}</span>
            <span className="date-created">{date_created}</span>
            <span className="comment-link">{comments} Comments</span>
            <span className="author">{author}</span>
        </section>
        <div className="content" dangerouslySetInnerHTML={{__html: content}} />        
        <footer>
            <a className="continue-reading" href="">Continue Reading</a>
            <div className="share">
                <ul>
                    <li className="share-title"><i class="fas fa-share"/></li>
                    <li><a href="#" className="fa fa-facebook"/></li>
                    <li><a href="#" className="fa fa-twitter"/></li>
                    <li><a href="#" className="fa fa-google"/></li>
                    <li><a href="#" className="fa fa-instagram"/></li>
                    <li><a href="#" className="fa fa-youtube"/></li>
                </ul>
            </div>
            
        </footer>
    </article>
);

/*
<section className="excerpt">
            {excerpt}
        </section>
*/

export default PostWithIntros;