import '../css/SideBar.css';
import AboutMeBlock from './AboutMeBlock';

const SideBar = ({setSideBarOut}) => {



    return (
        <div className="sidebar">
            <CloseButton setSideBarOut={setSideBarOut} />
            <AboutMeBlock />
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