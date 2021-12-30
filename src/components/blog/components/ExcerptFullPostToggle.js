import '../css/ExcerptFullPostToggle.css';

const ExcerptFullPostToggle = ({ showFullPostStatus, excerpt, content}) => {
    
    return (
        <>
            <div className={"excerpt" + (showFullPostStatus ? " hidden" : " show")}
                dangerouslySetInnerHTML={{__html:excerpt}} />
            <div className={"content" + (showFullPostStatus ? " show" : " hidden")}
                dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

export default ExcerptFullPostToggle;