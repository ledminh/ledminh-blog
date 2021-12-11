import { find } from "lodash";

import { posts as postsLocal, categories as categoriesLocal, tags as tagsLocal } from "./data"




export const categories = categoriesLocal;
export const tags = tagsLocal;
export const posts = postsLocal;


export const getPosts = () => {
    return posts.map((p, i) => ({...p, 
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


export const getCategories = () => {

    return categories;
}




/* PRIVATE METHODS 
---------------------------- */

const getItemFromID = (id, items) => find(items, {id: id});
