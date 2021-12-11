import { find } from "lodash";

import { posts as postsLocal, categories as categoriesLocal, tags as tagsLocal } from "./data"

const categories = categoriesLocal;
const tags = tagsLocal;


/* PRIVATE METHODS 
---------------------------- */
const getItemFromID = (id, items) => find(items, {id: id});

const getPosts = () => {
    return postsLocal.map((p, i) => ({...p, 
            categories: p.categoryIDs.map((catID) => {
                let cat = getItemFromID(catID, categories);

                return {
                    title: cat.title,
                    slug: cat.slug
                }
            }),
            tags: p.tagIDs.map(tagID => {
                let tag = getItemFromID(tagID, tags);

                return tag.name;
            })
            }))
}

const posts = getPosts();

/* PUBLIC METHODS
-------------------------------*/




export const getMainPost = (mainPostID) => {

    if(!mainPostID) return posts[0];

    return getItemFromID(mainPostID, posts);
}


export const getOtherPosts = (mainPostID = posts[0].id) => {
    
    return posts.filter((p) => p.id !== mainPostID)
                .map(oP => ({
                    id: oP.id,
                    feature_image_url: oP.feature_image_url,
                    title: oP.title,
                    meta_data: {
                        date_created: oP.date_created,
                        author: oP.author
                    }
                }));
}



export const getCategories = () => {

    return categories;
}





