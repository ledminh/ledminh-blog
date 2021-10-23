import '../css/PostIntros.css';
import {posts as fetchedPosts} from '../data';

import { useEffect, useState } from 'react';

const PostIntros = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {

        setPosts(fetchedPosts);


        return () => {
            setPosts([]);
        };
    }, []);



    return (
        <>
            {
                posts.map( p => <PostIntro
                                    key={p}
                                    title={p.title}
                                    feature_image_url={p.feature_image_url}
                                    categories={p.categories}
                                    tags= {p.tags}
                                    date_created= {p.date_created}
                                    comments={p.comments}
                                    author={p.author}
                                    excerpt={p.excerpt}                                
                                />)
            }
        </>
    );

};


const PostIntro = ({title, feature_image_url, categories, tags, date_created, comments, author, excerpt}) => (
    <article className="post-intro">
        <img src={feature_image_url} className="feature-image" />
        <div className="title">{title}</div>
        <section className="meta-data">
            <span className="categories">{categories.map(c => <span className="item">{c}</span>)}</span>
            <span className="tags">{tags.map(t => <span className="item">{t}</span>)}</span>
            <span className="date-created">{date_created}</span>
            <span className="comment-link">{comments} Comments</span>
            <span className="author">{author}</span>
        </section>
        <section className="excerpt">
            {excerpt}
        </section>
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

export default PostIntros;