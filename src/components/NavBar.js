import './css/NavBar.css';

import { useState } from "react";
import { useHistory } from 'react-router-dom';

const NavBar = ({sideBarOut}) => {
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => setDisplay(!display);

    const history = useHistory();

    return (
        <nav className={"top-nav-bar" + (sideBarOut? " side-bar-out": "")}>
            <div className="menu-title" onClick={toggleDisplay}>Menu</div>
            <section className={`main-menu ${display? "show" : "hidden"}`}>
                <ul>
                    <li onClick={() => history.push("/")}>Home</li>
                    <li onClick={() => history.push("/blog")}>Blog</li>
                </ul>           
            </section>
            <section className={`social-media-menu ${display? "show" : "hidden"}`}>
                <ul>
                    <li>
                        <i className="fa fa-facebook" onClick={() => window.location.href="https://www.facebook.com/drduyminh"}/>
                    </li>
                    <li>
                        <i className="fa fa-twitter" onClick={() => window.location.href="https://twitter.com/minhled"}/>
                    </li>
                    <li>
                        <i className="fa fa-linkedin" onClick={() => window.location.href="https://www.linkedin.com/in/ledminh/"}/>
                    </li>
                    <li>
                        <i className="fa fa-github" onClick={() => window.location.href="https://github.com/ledminh"} />
                    </li>
                    <li><a href="mailto:minh.le@ledminh.dev"><i className="fa fa-envelope"/></a></li>
                </ul>
            </section>
            <section className={`search-bar ${display? "show" : "hidden"}`}>
                <div className="gcse-searchbox-only" data-enableHistory="true" data-autoCompleteMaxCompletions="5"/>
            </section>
        </nav>
    );
}

export default NavBar;