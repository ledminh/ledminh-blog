import { Link } from 'react-router-dom';
import '../css/BlogNavigationBar.css';

const BlogNavigationBar = () => {

    return (
        <div className="blog-navigation-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </ul>
        </div>
    );
}

export default BlogNavigationBar;