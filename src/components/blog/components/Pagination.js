import '../css/Pagination.css';

const Pagination = ({nextOnClick, prevOnClick}) => {

    return (
        <div className="pagination">
            <button onClick={prevOnClick}>PREV</button>
            <div className="num-pages">
                <button className="round page">1</button>
                <button className="round page">2</button>
                <button className="round page">3</button>
                <button className="round page">...</button>
            </div>                        
            <button onClick={nextOnClick}>NEXT</button>
        </div>
    );
}

export default Pagination;