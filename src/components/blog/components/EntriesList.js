import '../css/EntriesList.css';

const EntriesList = ({onClickHandleMaker, entries}) => {
    return (
        <div className="entries-list">
                {
                    entries.map(e => (
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
    );
}




export default EntriesList;

const Entry = ({ id, feature_image_url, title, meta_data, onClickHandleMaker}) => {


    return (        
        <div className="entry" onClick={onClickHandleMaker(id)}>
            <img src={feature_image_url} className="feature-image" />
            <div className="information">
                <div className="title"><h3>{title}</h3></div>
                <div className="meta-data">
                    <h6>
                        {
                            Object.keys(meta_data).map(
                                (key, i) => (
                                    <>
                                        <span key={key} className={key}>{meta_data[key]}</span>
                                        {
                                            (i == Object.keys(meta_data).length - 1) ?
                                                <span></span>
                                                :
                                                <span> - </span>
                                        }
                                    </>
                                    )
                                )
                        }
                    </h6>
                </div>
            </div>
        </div>
    );
};


