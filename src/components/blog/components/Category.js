import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useCategoryActions, useFeatureImageActions } from "../redux/useActions";


import useCategory from "../redux/useCategory";

import Title from "./Title";
import SubTitle from "./SubTitle";


import '../css/CategoryPosts.css';

const Category = () => {
    const {slug} = useParams();
    const {setCurrentCategory} = useCategoryActions();
    const {setFeatureImageURL} = useFeatureImageActions();

    const {data} = useCategory();
    const {currentCategory} = data;
    const {title, meta_data, posts} = currentCategory;


    useEffect(() => {
        setCurrentCategory(slug);
        setFeatureImageURL(currentCategory.feature_image_url)
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
                    posts.map(p => <Post
                                        key={p.title}
                                        title={p.title}
                                        date_created={p.date_created}
                                        author={p.author}
                                        excerpt={p.excerpt}
                                        slug={p.slug}
                                    />)
                }
            </div>   
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