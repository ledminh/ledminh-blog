import '../css/OtherPosts.css';

const OtherPosts = ({postIndexes, mainPostIndex, posts, setMainPostIndex}) => {

    return (
        <div className="other-posts">
                {
                    postIndexes.filter((pI => pI !== mainPostIndex)).map(oI => (
                        <OtherPost key={posts[oI]}
                            postIndex={oI}
                            setMainPostIndex={setMainPostIndex}  
                            feature_image_url={posts[oI].feature_image_url} 
                            title={posts[oI].title}
                            date_created={posts[oI].date_created}
                            author={posts[oI].author}/>
                    ))
                }
                
            </div>
    );
}




export default OtherPosts;

const OtherPost = ({ feature_image_url, title, date_created, author, setMainPostIndex, postIndex }) => {


    return (
        
        <div className="other-post" onClick={() => setMainPostIndex(postIndex)}>
            <img src={feature_image_url} className="feature-image" />
            <div className="information">
                <div className="title">{title}</div>
                <div className="meta-data">
                    <span className="date-created">{date_created}</span>
                    <span className="author">{author}</span>
                </div>
            </div>
        </div>
    );
};