import './css/main-content.css';


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