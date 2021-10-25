import '../css/PostWithIntros.css';
import {posts as fetchedPosts} from '../data';

import { useEffect, useState } from 'react';

const postIndexes = [0,1,2,3,4];


const PostWithIntros = () => {
    
    const [posts, setPosts] = useState([]);
    const [mainPostIndex, setMainPostIndex] = useState(null);
        
                            

    useEffect(() => {

        setPosts(fetchedPosts);        

        setMainPostIndex(0);

        return () => {
            setPosts([]);
        };
    }, []);


    
    return (
        posts[0] ?
        (<div className="post-with-intro">
            <MainPost
            title={posts[mainPostIndex].title}
            feature_image_url={posts[mainPostIndex].feature_image_url}
            categories={posts[mainPostIndex].categories}
            tags= {posts[mainPostIndex].tags}
            date_created= {posts[mainPostIndex].date_created}
            comments={posts[mainPostIndex].comments}
            author={posts[mainPostIndex].author}
            excerpt={posts[mainPostIndex].excerpt}
            content={posts[mainPostIndex].content}                                
            />
            <div className="separator" />
            <div className="other-posts">
                {
                    postIndexes.filter((pI => pI !== mainPostIndex)).map(oI => (
                        <OtherPost key={posts[oI]}
                            postIndex={oI}
                            setMainPostIndex={setMainPostIndex}  
                            feature_image_url={posts[oI].feature_image_url} 
                            title={posts[oI].title}
                            date_created={posts[oI].date_created}
                            author={posts[oI].author}/>
                    ))
                }
                
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

const OtherPost = ({feature_image_url, title, date_created, author, setMainPostIndex, postIndex}) => {


    return (
        
        <div className="other-post" onClick={() => setMainPostIndex(postIndex)}>
            <img src={feature_image_url} className="feature-image"/>
            <div className="information">
                <div className="title">{title}</div>
                <div className="meta-data">
                    <span className="date-created">{date_created}</span>
                    <span className="author">{author}</span>
                </div>
            </div>
        </div>        
    );
}