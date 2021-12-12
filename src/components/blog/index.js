import './css/index.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import BlogNavigationBar from './components/BlogNavigationBar';
import FeatureImage from './components/FeatureImage';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import Category from './components/Category';

import useFeatureImage from './redux/useFeatureImage';



const Blog = () => {

    const featureImageURL = useFeatureImage().url;
    return (
        <Router>
            <div className="blog">                
                <BlogNavigationBar />
                <FeatureImage feature_image_url ={featureImageURL} />
                <MainContent>                         
                    <Switch>
                        <Route path="/category/:cat">
                            <Category/>
                        </Route> 
                        <Route path="/category">
                            <CategoryList />
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