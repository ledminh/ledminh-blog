import { find } from "lodash";

import { posts as postsLocal, categories as categoriesLocal, tags as tagsLocal } from "./data"

const getItemFromID = (id, items) => find(items, {id: id});

const tags = tagsLocal;
const categories = categoriesLocal.map((c) => ({...c, id: c.slug}));
const posts = postsLocal.map((p, i) => ({...p, 
                                        categories: p.categoryIDs.map((catID) => {
                                            let cat = getItemFromID(catID, categoriesLocal);

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


const getEntriesOnPage = (entries, numItemsPerPage, pageNum) => {
    const prevPage = pageNum - 1;
            
    let beginID = prevPage*numItemsPerPage,
        endID = pageNum*numItemsPerPage;
    

    const endPrev = beginID === 0;
    const endNext = endID > entries.length - 1;

    const displayedEntries = entries.slice(beginID, endID);

    return [displayedEntries, endPrev, endNext];
}


const getOtherPosts = (mainPostID = posts[0].id) => {
    
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

/* PUBLIC METHODS
-------------------------------*/

/* POST */
export const getMainPost = (mainPostID) => {

    if(!mainPostID) return posts[0];

    return getItemFromID(mainPostID, posts);
}


export const getDisplayedPosts = (mainPostID, numItemsPerPage, pageNum) => {
    let otherPosts = getOtherPosts(mainPostID);

    return getEntriesOnPage(otherPosts, numItemsPerPage, pageNum);

}

export const getNumPosts = () => posts.length;





/* CATEGORIES */
export const getNumCategories = () => categories.length;

export const getDisplayedCategories = (numItemsPerPage, currentPage) => getEntriesOnPage(categories, numItemsPerPage, currentPage);







