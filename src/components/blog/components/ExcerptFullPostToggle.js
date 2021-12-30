import '../css/ExcerptFullPostToggle.css';

const ExcerptFullPostToggle = ({ showFullPostStatus, excerpt, content}) => {
    if(excerpt && excerpt.length > 300)
        excerpt = excerpt.substring(0,300);

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