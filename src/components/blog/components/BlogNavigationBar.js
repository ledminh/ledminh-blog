import { Link } from 'react-router-dom';
import '../css/BlogNavigationBar.css';

const BlogNavigationBar = () => {

    return (
        <div className="blog-navigation-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/tags">Tags</Link></li>
                <li><Link to="/authors">Authors</Link></li>
            </ul>
        </div>
    );
}

export default BlogNavigationBar;