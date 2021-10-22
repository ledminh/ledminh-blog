import '../css/MainArea.css';

const MainArea = ({children, sideBarOut}) => (
    <section className="main-area">
        {children}
    </section>
);

export default MainArea;