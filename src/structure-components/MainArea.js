import './css/MainArea.css';

const MainArea = ({children, sideBarOut}) => (
    <div className="main-area">
        <div className="main-area-content">
            {children}
        </div>
    </div>
);

export default MainArea;