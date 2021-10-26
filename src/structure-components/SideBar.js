import { Children } from 'react';
import './css/SideBar.css';


const SideBar = ({setSideBarOut, children}) => {



    return (
        <div className="sidebar">
            <CloseButton setSideBarOut={setSideBarOut} />
            <div className="sidebar-content">           
                {children}
            </div>
        </div>
    );
}

export default SideBar;


const CloseButton = ({setSideBarOut}) => {

    return (
        <div className="close-button">
            <i className="fa fa-close" onClick={() => setSideBarOut(false)}/>
        </div>
    );
}