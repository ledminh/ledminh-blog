import '../css/EntriesList.css';

import FeatureImage from './FeatureImage';
import Pagination from './Pagination';

const EntriesList = ({onClickHandleMaker,
                        numItemsTotal,
                        currentPage, setCurrentPage,
                        currentPagi, setCurrentPagi,
                        numItemsPerPage, numPagiButtons,
                        endPrev, endNext, displayedEntries}) => {
    
    return (
        <>
        <div className="entries-list">
            {
                displayedEntries.map(e => (
                    <Entry key={e.id}
                        idInfo={e.idInfo}
                        feature_image_url={e.feature_image_url} 
                        title={e.title}
                        meta_data={e.meta_data}
                        onClickHandleMaker={onClickHandleMaker}
                        />)                             
                )
            }                
        </div>
        <Pagination
                    numItemsTotal={numItemsTotal} 
                    numItemsPerPage={numItemsPerPage}
                    numButtons={numPagiButtons}
                    nextOnClick={() =>setCurrentPage(currentPage + 1, numItemsPerPage)}
                    prevOnClick={() =>setCurrentPage(currentPage - 1, numItemsPerPage)}
                    endPrev={endPrev}
                    endNext={endNext}
                    setPageNumber={(p) => setCurrentPage(p, numItemsPerPage)}
                    currentPage={currentPage}
                    setCurrentPagi={setCurrentPagi}
                    currentPagi={currentPagi}
                    
                    />
        </>
    );
}




export default EntriesList;

const Entry = ({ idInfo, feature_image_url, title, meta_data, onClickHandleMaker}) => {
    
    const onClickHandle = onClickHandleMaker(idInfo);
    
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


