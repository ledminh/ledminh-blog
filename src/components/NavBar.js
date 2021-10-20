const NavBar = () => {



    return (
      <nav className="top-nav-bar">
        <div className="menu-title">Menu</div>
        <section className="main-menu">
            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>           
        </section>
        <section className="social-media-menu">
            <ul>
                <li>F</li>
                <li>T</li>
                <li>G</li>
                <li>I</li>
            </ul>
        </section>
        <section className="search-bar">
            <input type="text" placeholder="Search.."/>
        </section>
      </nav>
    );
}

export default NavBar;