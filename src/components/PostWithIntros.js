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
        posts[0] ?
        (<div className="post-with-intro">
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
            <div className="separator" />
            <div className="other-posts">
                <OtherPost feature_image_url={posts[0].feature_image_url} />
                <OtherPost feature_image_url={posts[0].feature_image_url}/>
                <OtherPost feature_image_url={posts[0].feature_image_url}/>
                <OtherPost feature_image_url={posts[0].feature_image_url}/>
            </div>
       
        </div>) :
        (<span>Loading ... </span>)
    );
       
    
    

};






export default PostWithIntros;

const MainPost = ({title, feature_image_url, categories, tags, date_created, comments, author, excerpt, content}) => {


    const [showFullPost, setShowFullPost] = useState(false);


    return (
        <article className="main-post">
            <img src={feature_image_url} className="feature-image" />
            <div className="title">{title}</div>
            <section className="meta-data">
                <span className="categories">{categories.map(c => <span className="item">{c}</span>)}</span>
                <span className="tags">{tags.map(t => <span className="item">{t}</span>)}</span>
                <span className="date-created">{date_created}</span>
                <span className="comment-link">{comments} Comments</span>
                <span className="author">{author}</span>
            </section>
            <section className={"excerpt" + (showFullPost? " hidden" : " show")}>
                {excerpt}
            </section>
            <div className={"content" + (showFullPost? " show" : " hidden")} 
                    dangerouslySetInnerHTML={{__html: content}} />
            
            <footer>
                <a className="continue-reading" onClick={() => setShowFullPost(!showFullPost)}>{showFullPost? "Minimize": "Continue Reading"}</a>
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

}

const OtherPost = ({feature_image_url}) => {


    return (
        
        <div className="other-post">
            <img src={feature_image_url} className="feature-image"/>
            <div className="information">
                <div className="title">This is the title</div>
                <div className="meta-data">
                    <span className="date-created">May 24, 2020</span>
                    <span className="author">Minh Le</span>
                </div>
            </div>
        </div>        
    );
}