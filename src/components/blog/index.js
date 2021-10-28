import './css/index.css';
import {posts as fetchedPosts} from '../../data';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BlogNavigationBar from './components/BlogNavigationBar';
import FeatureImage from './components/FeatureImage';
import Home from './components/Home';
import Category from './components/Category';
import { useState } from 'react';



const Blog = () => {
    const [featureImageURL, setFeatureImageURL] = useState("")
    return (
        <Router>
            <div className="blog">                
                <BlogNavigationBar />
                <FeatureImage feature_image_url ={featureImageURL} />
                <MainContent>                         
                    <Switch>
                        <Route path="/category">
                            <Category setFeatureImageURL={setFeatureImageURL}/>
                        </Route>
                        <Route path="/">                   
                            <Home setFeatureImageURL={setFeatureImageURL}/>
                        </Route>
                    </Switch>
                </MainContent>                       
            </div>
        </Router>
    );
};


export default Blog;

const MainContent = ({children}) => {

    return (
        <div className="main-content">
            {children}
        </div>
    )
}