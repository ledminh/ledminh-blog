import '../css/main-content.css';

import Home from "./Home";

const MainContent = ({children}) => {
    return (
        <main className="main-content">
            <div className="main-content-content">
                {children}
            </div>            
        </main>
    );
}

export default MainContent;