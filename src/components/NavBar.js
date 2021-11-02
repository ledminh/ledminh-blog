import './css/NavBar.css';

import { useState } from "react";

const NavBar = ({sideBarOut}) => {
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => setDisplay(!display);

    return (
      <nav className={"top-nav-bar" + (sideBarOut? " side-bar-out": "")}>
        <div className="menu-title" onClick={toggleDisplay}>Menu</div>
        <section className={`main-menu ${display? "show" : "hidden"}`}>
            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>           
        </section>
        <section className={`social-media-menu ${display? "show" : "hidden"}`}>
            <ul>
                <li><i className="fa fa-facebook"/></li>
                <li><i className="fa fa-twitter"/></li>
                <li><i className="fa fa-google"/></li>
                <li><i className="fa fa-instagram"/></li>
                <li><i className="fa fa-youtube"/></li>
            </ul>
        </section>
        <section className={`search-bar ${display? "show" : "hidden"}`}>
            <input type="text" placeholder="Search.."/>
        </section>
      </nav>
    );
}

export default NavBar;