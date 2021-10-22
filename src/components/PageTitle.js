import '../css/PageTitle.css';

const PageTitle = ({sideBarOut, setSideBarOut}) => {



    return (
      <div className="page-title" onClick={() => setSideBarOut(!sideBarOut)}>
        <a href="#">
          <div className="title">LE<span className="hidden-characters"> </span>D<span className="hidden-characters">UY </span>MINH</div>
          <div className="subtitle">A passionate developer</div>
        </a>
      </div>
    );
}

export default PageTitle;