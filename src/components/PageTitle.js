import './css/PageTitle.css';

const PageTitle = ({sideBarOut, setSideBarOut}) => {



    return (
      <div className="page-title">
        <a href="#">
          <div className="title">LE<span className="hidden-characters"> </span>D<span className="hidden-characters">UY </span>MINH</div>
          <div className="subtitle">A passionate developer</div>
        </a>
        <div className="sidebar-button">
          <i className="fa fa-bars" onClick={() => setSideBarOut(!sideBarOut)}/>
          <div className="sidebar-desc">
            {(sideBarOut? 
                <span style={{color: "blue"}}>CLOSE</span> :
                <span style={{color: "#86321d"}}>OPEN</span> )} SIDEBAR
            </div>
        </div>
        
      </div>
    );
}

export default PageTitle;