import './css/blog.css';
import {posts as fetchedPosts} from '../../data';

import { useEffect, useState } from 'react';

import Comments  from './Comments';
import MainPost  from './MainPost';
import OtherPosts from './OtherPosts';

const postIndexes = [0,1,2,3,4];


const Blog = () => {
    
    const [posts, setPosts] = useState([]);
    const [mainPostIndex, setMainPostIndex] = useState(null);
    const [showComments, setShowComments] = useState(false);    
                            

    useEffect(() => {

        setPosts(fetchedPosts);        

        setMainPostIndex(0);

        return () => {
            setPosts([]);
        };
    }, []);


    
    return (
        posts[0] ?
        (<div className="blog">
            <MainPost
            title={posts[mainPostIndex].title}
            feature_image_url={posts[mainPostIndex].feature_image_url}
            categories={posts[mainPostIndex].categories}
            tags= {posts[mainPostIndex].tags}
            date_created= {posts[mainPostIndex].date_created}
            comments={posts[mainPostIndex].comments}
            setShowComments={setShowComments}
            showComments={showComments}
            author={posts[mainPostIndex].author}
            excerpt={posts[mainPostIndex].excerpt}
            content={posts[mainPostIndex].content}                                
            />
            <Comments showComments={showComments} 
                        setShowComments={setShowComments}
                        comments={posts[mainPostIndex].comments}
            />
            <div className="separator" />

            <OtherPosts postIndexes={postIndexes}
                        mainPostIndex={mainPostIndex}
                        posts={posts}
                        setMainPostIndex={setMainPostIndex}                        
                        />
            
       
        </div>) :
        (<span>Loading ... </span>)
    );
       
    
    

};


export default Blog;

