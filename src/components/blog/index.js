import './css/index.css';
import {posts as fetchedPosts} from '../../data';

import { useEffect, useState } from 'react';

import BlogNavigationBar from './components/BlogNavigationBar';
import FeatureImage from './components/FeatureImage';
import Title from './components/Title';
import MetaData from './components/MetaData';
import ExcerptFullPostToggle from './components/ExcerptFullPostToggle';
import ButtonsPanel from './components/ButtonPanel';

import Comments  from './components/Comments';

import OtherPosts from './components/OtherPosts';

import Pagination from './components/Pagination';

const postIndexes = [0,1,2,3,4];


const Blog = () => {
    
    const [posts, setPosts] = useState([]);
    const [mainPostIndex, setMainPostIndex] = useState(null);
    const [showFullPost, setShowFullPost] = useState(false);
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
            (
            <div className="blog">
                <BlogNavigationBar />
                <FeatureImage feature_image_url ={posts[mainPostIndex].feature_image_url} />
                <MainContent>                    
                    <Title title={posts[mainPostIndex].title} />
                    <SubTitle>
                        <MetaData 
                            categories={posts[mainPostIndex].categories}
                            tags= {posts[mainPostIndex].tags}
                            date_created= {posts[mainPostIndex].date_created}
                            comments={posts[mainPostIndex].comments}
                            setShowComments={setShowComments}
                            author={posts[mainPostIndex].author}
                        />
                    </SubTitle>
                    <ExcerptFullPostToggle 
                        showFullPost={showFullPost} 
                        excerpt={posts[mainPostIndex].excerpt}
                        content={posts[mainPostIndex].content}
                        />
                    <ButtonsPanel
                        showFullPost={showFullPost}
                        setShowFullPost={setShowFullPost}                    
                        setShowComments={setShowComments}
                        showComments={showComments}
                                                        
                        />                
                    <Comments 
                        showComments={showComments} 
                        setShowComments={setShowComments}
                        comments={posts[mainPostIndex].comments}
                        />

                    <div className="separator" />

                    <OtherPosts 
                        postIndexes={postIndexes}
                        mainPostIndex={mainPostIndex}
                        posts={posts}
                        setMainPostIndex={setMainPostIndex}                        
                        />
                    <Pagination />                
                </MainContent>
                               
            </div>
            ) :
            (<span>Loading ... </span>)
    );
};


export default Blog;

const SubTitle  = ({children}) => {

    return (
        <div className="subtitle">
            {children}
        </div>
    );
}

const MainContent = ({children}) => {

    return (
        <div className="main-content">
            {children}
        </div>
    )
}