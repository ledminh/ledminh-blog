import { useSelector } from 'react-redux';
import '../css/ExcerptFullPostToggle.css';

const ExcerptFullPostToggle = ({ excerpt, content}) => {
    
    const status = useSelector(state => state.blog.func);

    return (
        <>
            <section className={"excerpt" + (status.showFullPost ? " hidden" : " show")}>
                {excerpt}
            </section>
            <div className={"content" + (status.showFullPost ? " show" : " hidden")}
                dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

export default ExcerptFullPostToggle;