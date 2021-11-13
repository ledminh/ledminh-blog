import './css/index.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import BlogNavigationBar from './components/BlogNavigationBar';
import FeatureImage from './components/FeatureImage';
import Home from './components/Home';
import Category from './components/Category';
import { LocationConstants } from './redux/statuses/reducers/locationReducer';
import useStatuses from './redux/useStatuses';
import useData from './redux/useData';


const Blog = () => {
    const {posts} = useData();
    const statuses = useStatuses();

    let featureImageURL = "";

    if(statuses.location === LocationConstants.HOME){
        featureImageURL = posts[statuses.home.mainPostArrID].feature_image_url;
    }
    else if(statuses.location === LocationConstants.CATEGORIES) {
        featureImageURL = "https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/should-you-noindex-category-archive-pages-5f16d5658b540-1520x800.png";
    }

    return (
        <Router>
            <div className="blog">                
                <BlogNavigationBar />
                <FeatureImage feature_image_url ={featureImageURL} />
                <MainContent>                         
                    <Switch>
                        <Route path="/category">
                            <Category />
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