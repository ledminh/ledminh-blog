import '../css/EntriesList.css';

import FeatureImage from './FeatureImage';
import Pagination from './Pagination';

export const GALLERY = "ENTRY_LIST/GALLERY";
export const VERTICAL_LIST = "ENTRY_LIST_VERTICAL";

const EntriesList = ({onClickHandleMaker,
                        numItemsTotal,
                        currentPage, setCurrentPage,
                        currentPagi, setCurrentPagi,
                        numItemsPerPage, numPagiButtons,
                        endPrev, endNext, displayedEntries,
                        listType
                    }) => {
    
    return (
        <>
        <div className={(listType === GALLERY) ? "gallery-list"
                        : ((listType === VERTICAL_LIST)? "vertical-list": "") }>
            {
                displayedEntries.map(e => {
                    
                    let entry;

                    if(listType === GALLERY){
                        entry = <GalerryEntry key={e.id}
                            idInfo={e.idInfo}
                            feature_image_url={e.feature_image_url} 
                            title={e.title}
                            meta_data={e.meta_data}
                            onClickHandleMaker={onClickHandleMaker}
                            />
                    }
                    else if(listType === VERTICAL_LIST){
                        entry = <VerticalEntry
                                key={e.title}
                                title={e.title}
                                date_created={e.date_created}
                                author={e.author.name}
                                excerpt={e.excerpt}
                                idInfo={e.idInfo}
                                onClickHandleMaker={onClickHandleMaker}
                            />
                    }

                    return entry;

                })
            }                
        </div>
        <Pagination
                    numItemsTotal={numItemsTotal} 
                    numItemsPerPage={numItemsPerPage}
                    numButtons={numPagiButtons}
                    nextOnClick={() =>setCurrentPage(currentPage + 1)}
                    prevOnClick={() =>setCurrentPage(currentPage - 1)}
                    endPrev={endPrev}
                    endNext={endNext}
                    setPageNumber={(p) => setCurrentPage(p)}
                    currentPage={currentPage}
                    setCurrentPagi={setCurrentPagi}
                    currentPagi={currentPagi}
                    
                    />
        </>
    );
}




export default EntriesList;

const GalerryEntry = ({ idInfo, feature_image_url, title, meta_data, onClickHandleMaker}) => {
    
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
                                            <span key={key + ((key === "date_created")? meta_data[key].text 
                                                                                    :((key === "author")? meta_data[key].name 
                                                                                    : meta_data[key]))}>
                                                <span className={key}>{((key === "date_created")? meta_data[key].text 
                                                                                    :((key === "author")? meta_data[key].name 
                                                                                    : meta_data[key]))}</span>
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


const VerticalEntry =  ({title, date_created, author, excerpt, idInfo, onClickHandleMaker}) => {
    
    const onClickHandle = onClickHandleMaker(idInfo);
    return (
        <div className="post"
            onClick={onClickHandle}
            >
            <h4>{title}</h4>
            <div className="meta-data"><h6>{date_created.text} - {author} </h6></div>
            <div className="excerpt" dangerouslySetInnerHTML={{__html: excerpt}}/>
        </div>
    )
}