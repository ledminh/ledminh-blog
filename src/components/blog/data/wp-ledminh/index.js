import { find, reduce } from "lodash";

import { posts as postsLocal, categories as categoriesLocal, tags as tagsLocal, authors as authorsLocal } from "./data"

const convertTitleToSlug = (title) => title.toLowerCase().split(" ").splice(0).join("-");
export const convertDateToSlug = (date) => date.replace(',', '').toLowerCase().split(" ").splice(0).join("-");

const authors = authorsLocal.map(a => ({ ...a,
                                        idInfo: {
                                            slug: a.username
                                        }
                                            
                                        }));

const tags = tagsLocal.map((t) => ({ ...t,
                                        idInfo: {
                                            name: t.name
                                        }                                    
                                    }));

const categories = categoriesLocal.map((c) => ({...c, 
                                                idInfo: {
                                                    slug: c.slug
                                                }
                                                }));
const posts = postsLocal.map((p, i) => ({...p,
                                        date_created: {
                                            text: p.date_created,
                                            slug: convertDateToSlug(p.date_created)
                                        },
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
                                        }),
                                        author: find(authors, {id: p.authorID}) 
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
                    idInfo: {
                        id: oP.id
                    },
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

export const  getCategory = (slug, numItemsPerPage, pageNum) => {
    let cat = find(categories, {slug: slug});

    let ps = posts.filter(p => {
                        return p.categoryIDs.indexOf(cat.id) !== -1;
                    })
                    .map(p => ({
                        title: p.title,
                        idInfo:{
                            slug: p.slug
                        },
                        date_created: p.date_created,
                        author: p.author,
                        excerpt: p.excerpt
                    }));
    
    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    
    cat.posts = {
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    cat.featureImage = {
        url: cat.feature_image_url
    }
    return cat;
    
}

/* CATEGORIES */
export const getSinglePost = (slug) => {
    let p = find(posts, {slug: slug});

    return p;
}

/* TAGS LIST */
export const getTagsList = () => {

    return tags;
}

export const  getTag = (name, numItemsPerPage, pageNum) => {
    let tag = find(tags, {name: name});

    let ps = posts.filter(p => {
                        return p.tagIDs.indexOf(tag.id) !== -1;
                    })
                    .map(p => ({
                        title: p.title,
                        idInfo:{
                            slug: p.slug
                        },
                        date_created: p.date_created,
                        author: p.author,
                        excerpt: p.excerpt
                    }));
    
    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    
    tag.posts = {
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    return tag;
    
}

/* DATES LIST */
export const getDatesList = () => {
    let datesList = reduce(posts, (dsL, p) => {
                            if(dsL.indexOf(p.date_created.text) === -1){
                                dsL.push(p.date_created.text)
                            }

                            return dsL;
                        }, [])
                        .map(date => ({
                            name: date,
                            idInfo: {
                                slug: convertDateToSlug(date)
                            }
                        }));
    
    return datesList;
}

/* SINGLE DATE PAGE */
export const getPostsOnDate = (slug, numItemsPerPage, pageNum) => {
    const dates = getDatesList();

    let date = find(dates, {idInfo: {slug: slug}});
    

    let ps = posts.filter(p => {
                        return p.date_created.slug === slug;
                    })
                    .map(p => ({
                        title: p.title,
                        idInfo:{
                            slug: p.slug
                        },
                        date_created: p.date_created,
                        author: p.author,
                        excerpt: p.excerpt
                    }));
    
    

    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    date.posts = {
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    
    return date;
    
}

/* AUTHORS LIST */
export const getAuthorsList = () => authors;



export const getAuthor = (slug, numItemsPerPage, pageNum) => {
    let author = find(authors, {idInfo: {slug: slug}});

    let ps = posts.filter(p => {
                                return p.authorID === author.id
                            })
                            .map(p => ({
                                title: p.title,
                                idInfo:{
                                    slug: p.slug
                                },
                                date_created: p.date_created,
                                author: p.author,
                                excerpt: p.excerpt
                            }));
    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    author.posts = {
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    
    return author;
}


/* COMMENTS */
export const addComment = ({postID, author, content}) => {
    const i = posts.findIndex((p) => p.id === postID);
    const comments = posts[i].comments.slice();
    comments.unshift({author: author, content: content})
    posts[i].comments = comments;

    
}


// import {getOtherPosts, getEntriesOnPage, convertDateToSlug} from '../utils';

// import WPAPI from 'wpapi';
// import { find, reduce } from 'lodash';

// const wp = new WPAPI({endpoint: "https://www.ledminh.com/wp-json"});


// let numPosts = -1;
// let posts = [];

// let numCategories = -1;
// let categories = [];

// let tags = [];

// let authors = [];



// async function loadAuthorsFromWP() {
//     let us = await wp.users();
    
//     const totalUsers = us._paging.total;

//     us = await wp.users().page(1).perPage(totalUsers);
    
//     authors = us.map((u) => {

//         let aURLsKeys = Object.keys(u.avatar_urls);

//         let profilePicture = u.avatar_urls[aURLsKeys[2]];



//         return {
//             id: "author-" + u.id,
//             name: u.name,
//             slogan: u.description,
//             bio: {
//                 text: ""
//             },
//             profilePicture: {
//                 url: profilePicture
//             },
//             idInfo: {
//                 slug: u.slug
//             }
//         }
//     });
    
    

// }


// async function loadTagsFromWP() {
//     let ts = await wp.tags();
    
//     const totalTags = ts._paging.total;
//     const numPages = Math.ceil(totalTags/20);
//     let promiseTags = [];

//     for(let i = 1; i <= numPages; i++){
//         promiseTags.push(wp.tags().page(i).perPage(20));
//     }

//     Promise.allSettled(promiseTags).then(results => {
//         tags = results.map(t => {


//             return {
//                 id: "tag-" + t.id,
//                 name: t.name,
//                 idInfo: {
//                     name: t.name
//                 }
//             }
//         }); 
//     });


    
    

// }


// async function loadCategoriesFromWP() {

//     let catsFromWP = await wp.categories();
    
//     const numCategories = catsFromWP._paging.total;
//     const numPages = Math.ceil(numCategories/20);

//     let promiseCats = [];

//     for(let i = 1; i <= numPages; i++){
//         promiseCats.push(wp.categories().page(i).perPage(20));
//     }

    

//     Promise.allSettled(promiseCats).then(results => {
        
//         categories = results.map(c => {


//             return {
//                 id: "cat-" + c.id,
//                 feature_image_url: "",
//                 title: c.name,
//                 idInfo: {
//                     slug: c.slug
//                 },
//                 meta_data: {
//                     cat_subtitle: c.description
//                 }
//             }
//         });
        
        
//     });
// }


// async function getNumPostsFromWP() {
    
//     wp.posts().headers()
//                 .then((h) => {
//                     numPosts = h["x-wp-total"]
//                 });
        
                    
// }

// async function loadPostsFromWP(totalPostsNeeded) {
//     let numPostsToLoad = totalPostsNeeded - posts.length;

//     const pArray = await wp.posts().perPage(numPostsToLoad).offset(posts.length);
    
    



    
    
    
//     for(let i = 0; i < pArray.length; i++) {
//         let p = pArray[i];
        

//         const media  = await wp.media().id(p.featured_media);

//         const feature_image_url = media.guid.rendered;
    
//         const commentsWP = await wp.comments().slug(p.slug);

//         const comments = commentsWP.map((c) => ({
//                             author: c.author_name,
//                             content: c.content.rendered
//                         }));

//         const newPost  = {
//             id: p.id,
//             title: p.title.rendered,
//             slug: p.slug,
//             feature_image_url: feature_image_url,
//             categories: p.categories.map((catID) => {

//                 let cat = find(categories, {id: "cat-" + catID});

//                 return {
//                     title: cat.title,
//                     slug: cat.slug
//                 }
//             }),


//             tags: p.tags.map(tagID => {
//                 let tag = find(tags, {id: "tag-" + tagID});
//                 return tag.name
//             }),
//             date_created: {
//                 text: p.date,
//                 slug: convertDateToSlug(p.date)
//             },
//             comments: comments,
//             author: find(authors, {id: "author" + p.author}),
//             excerpt: p.excerpt.rendered,
//             content: p.content.rendered,
            
//         };

//         posts.push(newPost);


//     }
    

    
// }








// export async function initData() {

//     await loadAuthorsFromWP();
//     await loadTagsFromWP();
//     await loadCategoriesFromWP();

//     await getNumPostsFromWP();

//     await loadPostsFromWP(11);

// } 


// initData();




// /* PUBLIC METHODS
// -------------------------------*/
// /* POST */

// export const getMainPost = (mainPostID) => {
//     if(!mainPostID) {
//         if(!posts[0]) return {};

//         return posts[0];
//     }
    
//     return find(posts, {id: mainPostID});
// }


// export const getDisplayedPosts = async (mainPostID, numItemsPerPage, pageNum) => {
//     let totalPostsNeeded = numItemsPerPage*pageNum + 1;

//     if(totalPostsNeeded > posts.length){
//         await loadPostsFromWP(totalPostsNeeded);
//     }
    
    

//     let otherPosts = getOtherPosts(posts, mainPostID);
    
//     console.log(otherPosts);
//     return getEntriesOnPage(otherPosts, numItemsPerPage, pageNum);

// }

// export const getNumPosts = () => numPosts;



// /* CATEGORIES */
// export const getNumCategories = () => numCategories;


// export const getDisplayedCategories = (numItemsPerPage, currentPage) => {
    

//     return getEntriesOnPage(categories, numItemsPerPage, currentPage);
// }




// export const  getCategory = (slug, numItemsPerPage, pageNum) => {
//     let cat = find(categories, {slug: slug});

//     let ps = posts.filter(p => {
//                         return p.categoryIDs.indexOf(cat.id) !== -1;
//                     })
//                     .map(p => ({
//                         title: p.title,
//                         idInfo:{
//                             slug: p.slug
//                         },
//                         date_created: p.date_created,
//                         author: p.author,
//                         excerpt: p.excerpt
//                     }));
    
//     const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    
//     cat.posts = {
//         displayedPosts: displayedPosts,
//         totalPosts: ps.length,
//         endPrev: endPrev,
//         endNext: endNext
//     };

//     cat.featureImage = {
//         url: cat.feature_image_url
//     }
//     return cat;
    
// }

// /* CATEGORIES */
// export const getSinglePost = (slug) => {
//     let p = find(posts, {slug: slug});

//     return p;
// }

// /* TAGS LIST */
// export const getTagsList = () => {

//     return tags;
// }

// export const  getTag = (name, numItemsPerPage, pageNum) => {
//     let tag = find(tags, {name: name});

//     let ps = posts.filter(p => {
//                         return p.tagIDs.indexOf(tag.id) !== -1;
//                     })
//                     .map(p => ({
//                         title: p.title,
//                         idInfo:{
//                             slug: p.slug
//                         },
//                         date_created: p.date_created,
//                         author: p.author,
//                         excerpt: p.excerpt
//                     }));
    
//     const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    
//     tag.posts = {
//         displayedPosts: displayedPosts,
//         totalPosts: ps.length,
//         endPrev: endPrev,
//         endNext: endNext
//     };

//     return tag;
    
// }

// /* DATES LIST */
// export const getDatesList = () => {
//     let datesList = reduce(posts, (dsL, p) => {
//                             if(dsL.indexOf(p.date_created.text) === -1){
//                                 dsL.push(p.date_created.text)
//                             }

//                             return dsL;
//                         }, [])
//                         .map(date => ({
//                             name: date,
//                             idInfo: {
//                                 slug: convertDateToSlug(date)
//                             }
//                         }));
    
//     return datesList;
// }

// /* SINGLE DATE PAGE */
// export const getPostsOnDate = (slug, numItemsPerPage, pageNum) => {
//     const dates = getDatesList();

//     let date = find(dates, {idInfo: {slug: slug}});
    

//     let ps = posts.filter(p => {
//                         return p.date_created.slug === slug;
//                     })
//                     .map(p => ({
//                         title: p.title,
//                         idInfo:{
//                             slug: p.slug
//                         },
//                         date_created: p.date_created,
//                         author: p.author,
//                         excerpt: p.excerpt
//                     }));
    
    

//     const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

//     date.posts = {
//         displayedPosts: displayedPosts,
//         totalPosts: ps.length,
//         endPrev: endPrev,
//         endNext: endNext
//     };

    
//     return date;
    
// }

// /* AUTHORS LIST */
// export const getAuthorsList = () => authors;



// export const getAuthor = (slug, numItemsPerPage, pageNum) => {
//     let author = find(authors, {idInfo: {slug: slug}});

//     let ps = posts.filter(p => {
//                                 return p.authorID === author.id
//                             })
//                             .map(p => ({
//                                 title: p.title,
//                                 idInfo:{
//                                     slug: p.slug
//                                 },
//                                 date_created: p.date_created,
//                                 author: p.author,
//                                 excerpt: p.excerpt
//                             }));
//     const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

//     author.posts = {
//         displayedPosts: displayedPosts,
//         totalPosts: ps.length,
//         endPrev: endPrev,
//         endNext: endNext
//     };

    
//     return author;
// }


// /* COMMENTS */
// export const addComment = ({postID, author, content}) => {

// }

// export const addComment = ({postID, author, content}) => {
//     const i = posts.findIndex((p) => p.id === postID);
//     const comments = posts[i].comments.slice();
//     comments.unshift({author: author, content: content})
//     posts[i].comments = comments;

    
// }

