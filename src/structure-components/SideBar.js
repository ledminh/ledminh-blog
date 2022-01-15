import './css/SideBar.css';


const SideBar = ({setSideBarOut, sideBarOut, children}) => {



    return (
        <div className={"sidebar" + (sideBarOut? " side-bar-out": "")}>
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