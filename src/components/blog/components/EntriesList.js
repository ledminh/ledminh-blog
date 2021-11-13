import '../css/EntriesList.css';

import FeatureImage from './FeatureImage';
import Pagination from './Pagination';

const EntriesList = ({onClickHandleMaker, entries, 
                        currentPage, setCurrentPage,
                        currentPagi, setCurrentPagi,
                        numItemsPerPage, numPagiButtons}) => {
    const [displayedEntries, endPrev, endNext]  = getPage(entries, numItemsPerPage, currentPage);

    return (
        <>
        <div className="entries-list">
            {
                displayedEntries.map(e => (
                    <Entry key={e.id}
                        id={e.id}
                        feature_image_url={e.feature_image_url} 
                        title={e.title}
                        meta_data={e.meta_data}
                        onClickHandleMaker={onClickHandleMaker}
                        />)                             
                )
            }                
        </div>
        <Pagination
                    numItemsTotal={entries.length}
                    numItemsPerPage={numItemsPerPage}
                    numButtons={numPagiButtons}
                    nextOnClick={() =>setCurrentPage(currentPage + 1)}
                    prevOnClick={() =>setCurrentPage(currentPage - 1)}
                    endPrev={endPrev}
                    endNext={endNext}
                    setPageNumber={setCurrentPage}
                    currentPage={currentPage}
                    setCurrentPagi={setCurrentPagi}
                    currentPagi={currentPagi}
                    
                    />
        </>
    );
}




export default EntriesList;

const Entry = ({ id, feature_image_url, title, meta_data, onClickHandleMaker}) => {
    
    const onClickHandle = onClickHandleMaker(id);

    return (        
        <div className="entry" onClick={onClickHandle}>
            <FeatureImage 
                feature_image_url={feature_image_url} 
                altText={title}
                />
            <div className="information">
                <div className="title"><h3>{title}</h3></div>
                <div className="meta-data">
                    <h6>
                        {
                            Object.keys(meta_data).map(
                                (key, i) => 
                                        (
                                            <span key={key + meta_data[key]}>
                                                <span className={key}>{meta_data[key]}</span>
                                                {
                                                    (i === Object.keys(meta_data).length - 1) ?
                                                        <span></span>
                                                        :
                                                        <span> - </span>
                                                }
                                            </span>
                                        )
                                )
                        }
                    </h6>
                </div>
            </div>
        </div>
    );
};


const getPage = (entries, numItemsPerPage, currentPage) => {
    const prevPage = currentPage - 1;
            
    let beginID = prevPage*numItemsPerPage,
        endID = currentPage*numItemsPerPage;
    

    const endPrev = beginID === 0;
    const endNext = endID > entries.length - 1;

    const displayedEntries = entries.slice(beginID, endID);

    return [displayedEntries, endPrev, endNext];
}