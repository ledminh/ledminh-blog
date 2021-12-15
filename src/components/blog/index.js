import './css/index.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import BlogNavigationBar from './components/BlogNavigationBar';
import FeatureImage from './components/FeatureImage';
import Home from './components/Home';
import CategoriesList from './components/CategoriesList';
import Category from './components/Category';
import SinglePostPage from './components/SinglePostPage';

import useFeatureImage from './redux/useFeatureImage';
import TagsList from './components/TagsList';
import SingleTagPage from './components/SingleTagPage';



const Blog = () => {

    const featureImageURL = useFeatureImage().url;
    return (
        <Router>
            <div className="blog">                
                <BlogNavigationBar />
                <FeatureImage feature_image_url ={featureImageURL} />
                <MainContent>                         
                    <Switch>
                        <Route path="/tag/:tagName">
                            <SingleTagPage/>
                        </Route>
                        <Route path="/tags">
                            <TagsList/>
                        </Route>
                        <Route path="/post/:slug">
                            <SinglePostPage/>
                        </Route>
                        <Route path="/category/:slug">
                            <Category/>
                        </Route> 
                        <Route path="/categories">
                            <CategoriesList />
                        </Route>
                        <Route path="/">                   
                            <Home />
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