import '../css/Pagination.css';

const Pagination = ({nextOnClick, prevOnClick, paginationArr, setPageNumber, getNextPagi, getPrevPagi}) => {

    return (
        <div className="pagination">
            <button onClick={prevOnClick}>PREV</button>
            <div className="num-pages">
                <button className="round page" onClick={getPrevPagi}>...</button>
                {
                    paginationArr.map((pageNum) => (<button key={pageNum}
                                                        className="round page"
                                                        onClick={() => setPageNumber(pageNum)}>
                                                            {pageNum}
                                                    </button>))
                }
                <button className="round page" onClick={getNextPagi}>...</button>                
            </div>                        
            <button onClick={nextOnClick}>NEXT</button>
        </div>
    );
}

export default Pagination;