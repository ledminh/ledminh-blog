import '../css/ExcerptFullPostToggle.css';

const ExcerptFullPostToggle = ({showFullPost, excerpt, content}) => {

    return (
        <>
            <section className={"excerpt" + (showFullPost ? " hidden" : " show")}>
                {excerpt}
            </section>
            <div className={"content" + (showFullPost ? " show" : " hidden")}
                dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

export default ExcerptFullPostToggle;