import '../css/ExcerptFullPostToggle.css';

const ExcerptFullPostToggle = ({ showFullPostStatus, excerpt, content}) => {
    
    return (
        <>
            <section className={"excerpt" + (showFullPostStatus ? " hidden" : " show")}>
                {excerpt}
            </section>
            <div className={"content" + (showFullPostStatus ? " show" : " hidden")}
                dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

export default ExcerptFullPostToggle;