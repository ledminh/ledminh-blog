import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSingleCategoryActions, useFeatureImageActions } from "../redux/useActions";


import useSingleCategory from "../redux/useSingleCategory";

import Title from "./Title";
import SubTitle from "./SubTitle";
import Pagination from "./Pagination";


import '../css/CategoryPosts.css';

const Category = () => {
    const {slug} = useParams();
    const {setCurrentCategory, setCurrentPage, setCurrentPagi} = useSingleCategoryActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {title, meta_data, feature_image_url, posts, numItemsPerPage, numPagiButtons, currentPage, currentPagi} = useSingleCategory();
    
    const {displayedPosts, endPrev, endNext} = posts;

    
    useEffect(() => {
        setCurrentCategory(slug);
        setFeatureImageURL(feature_image_url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    return (
        meta_data ?
        (<>
            <Title title={title}/>
            <SubTitle>
                {meta_data.cat_subtitle}
            </SubTitle>
            <div className="category-posts">
                {
                    displayedPosts.map(p => <Post
                                        key={p.title}
                                        title={p.title}
                                        date_created={p.date_created}
                                        author={p.author}
                                        excerpt={p.excerpt}
                                        slug={p.slug}
                                    />)
                }
            </div>

            <Pagination
                    numItemsTotal={posts.totalPosts} 
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
        </>)
        :(
            <div>Loading ...</div>
        )
    );
}

export default Category;



const Post = ({title, date_created, author, excerpt, slug}) => {
    const history = useHistory();
    
    return (
        <div className="post"
            onClick={() => history.push("/post/" + slug)}
            >
            <h4>{title}</h4>
            <div className="meta-data"><h6>{date_created} - {author} </h6></div>
            <div className="excerpt">{excerpt}</div>
        </div>
    )
}

/*
async function postsOnCat() {
    
    const res = await fetch("https://www.ledminh.com/wp-json/wp/v2/posts");

    let numP = res.headers.get("x-wp-total");
                    
    console.log(numP);

    
}

*/