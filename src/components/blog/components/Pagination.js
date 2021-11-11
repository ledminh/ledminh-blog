import { range} from 'lodash';
import { useState } from 'react';
import '../css/Pagination.css';

const Pagination = ({nextOnClick, prevOnClick,
                        endNext, endPrev,
                        setPageNumber, currentPage,
                        numItemsTotal, numItemsPerPage,
                        numButtons}) => {
    
    const [pagiArr, atLast, atBegin, currentPagi, setCurrentPagi
            ] = usePagi(numItemsTotal, numItemsPerPage, numButtons, currentPage);
    
        
    return (
        <>
        {
            (
                (numItemsTotal === 0) ? ""
                                    :
                                    (<div className="pagination">
                                        <button className={endPrev? "inactive": ""} onClick={endPrev? null: 
                                                                                                        () => {
                                                                                                            if(currentPage === pagiArr[0]) { // we're on the first page of pagi but the user still clicks prev
                                                                                                                setCurrentPagi(currentPagi - 1);
                                                                                                            }
                                                                                                            prevOnClick();
                                                                                                        }}>PREV</button>
                                        <div className="num-pages">
                                            {
                                                atBegin? "" : <button className="round page" onClick={() => setCurrentPagi(currentPagi - 1)}>...</button>
                                            }                
                                            {
                                                pagiArr.map((pageNum) => (<button key={pageNum}
                                                                                    className={"round page" + ((currentPage === pageNum)? " current-page": "")}
                                                                                    onClick={() => setPageNumber(pageNum)}>
                                                                                        {pageNum}
                                                                                </button>))
                                            }
                                            {
                                                atLast? "" : <button className="round page" onClick={() => setCurrentPagi(currentPagi + 1)}>...</button>
                                            }                                
                                        </div>
                                        <button className={endNext? "inactive": ""} onClick={endNext? null :
                                                                                                        () => {
                                                                                                            if(currentPage === pagiArr[2]){ // we're on the last page of pagi but the user still clicks next
                                                                                                                setCurrentPagi(currentPagi + 1);
                                                                                                            }
                                                                                                            nextOnClick();
                                                                                                        }}>NEXT</button>                        
                                        
                                    </div>)
            )

        }
        </>
    );

    
}

export default Pagination;





const usePagi = (numItemsTotal, numItemsPerPage, numButtons, currentPage) => {
    const lastPagiID = Math.ceil(numItemsTotal/numItemsPerPage); 
    
    const [currentPagi, setCurrentPagi] = useState(1);
    const prevPagi = currentPagi - 1;

    let startID = prevPagi*numButtons + 1,
        endID = startID + numButtons; 

    if(endID > lastPagiID + 1) {
        endID = lastPagiID + 1;        
    }

    
    const pagiArr =  range(startID, endID);
    
    const atLast = endID === lastPagiID + 1;
    const atBegin = startID === 1; 



    return [pagiArr, atLast, atBegin, currentPagi, setCurrentPagi];
}