import { find } from "lodash";

import { posts as postsLocal, categories as categoriesLocal, tags as tagsLocal } from "./data"

const convertTitleToSlug = (title) => title.toLowerCase().split(" ").splice(0).join("-");

const tags = tagsLocal;
const categories = categoriesLocal.map((c) => ({...c, 
                                                idInfo: c.slug}));
const posts = postsLocal.map((p, i) => ({...p,
                                        slug: convertTitleToSlug(p.title),
                                        categories: p.categoryIDs.map((catID) => {
                                            let cat = find(categories, {id: catID});

                                            return {
                                                title: cat.title,
                                                slug: cat.slug
                                            }
                                        }),
                                        tags: p.tagIDs.map(tagID => {
                                            let tag = find(tags, {id: tagID});

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
                    idInfo: oP.id,
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
    

    return find(posts, {id: mainPostID});
}


export const getDisplayedPosts = (mainPostID, numItemsPerPage, pageNum) => {
    let otherPosts = getOtherPosts(mainPostID);
    
    return getEntriesOnPage(otherPosts, numItemsPerPage, pageNum);

}

export const getNumPosts = () => posts.length;





/* CATEGORIES */
export const getNumCategories = () => categories.length;

export const getDisplayedCategories = (numItemsPerPage, currentPage) => getEntriesOnPage(categories, numItemsPerPage, currentPage);

export const  getCategory = (slug) => {
    let cat = find(categories, {slug: slug});

    let ps = posts.filter(p => {
                        return p.categoryIDs.indexOf(cat.id) !== -1;
                    })
                    .map(p => ({
                        title: p.title,
                        slug: p.slug,
                        date_created: p.date_created,
                        author: p.author,
                        excerpt: p.excerpt
                    }));
    
    
    cat.posts = ps;

    return cat;
    
}

/* CATEGORIES */
export const getSinglePost = (slug) => {
    let p = find(posts, {slug: slug});

    return p;
}


