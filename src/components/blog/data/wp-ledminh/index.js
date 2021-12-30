import { find, reduce } from "lodash";
import { convertDateToSlug } from "../utils";


import WPAPI from 'wpapi';
const wp = new WPAPI({endpoint: "https://www.ledminh.com/wp-json"});

let numPosts = -1;
let posts = [];

let numCategories = -1;
let categories = [];

let tags = [];

let authors = [];



const convertToAuthor = a => ({
    id: "author-" + a.id,
    name: a.name,
    slogan: a.description,
    bio: {
        text: "Some info on " + a.name
    },
    profilePicture: {
        url: a.avatar_urls[Object.keys(a.avatar_urls)[2]]
    },
    idInfo: {
        slug: a.slug
    }
});


const convertToTag = t => ({
    id: "tag-" + t.id,
    idFromWP: t.id,
    name: t.name,
    idInfo: {
        name: t.name
    }
});


const convertToCategory = c => ({
    id: "cat-" + c.id,
    feature_image_url: "",
    title: c.name,
    idInfo: {
        slug: c.slug
    },
    meta_data: {
        cat_subtitle: c.description
    }
});


const convertToPost = p => ({
    id: "post-" + p.id,
    title: p.title.rendered,
    slug: p.slug,
    feature_image_url: p.jetpack_featured_media_url,
    categories: p.categories.map((catID) => {

        let cat = find(categories, {id: "cat-" + catID});

        return {
            title: cat.title,
            slug: cat.idInfo.slug
        }
    }),


    tags: p.tags.map(tagID => {
        let tag = find(tags, {id: "tag-" + tagID});
        return tag.name
    }),

    date_created: {
        text: p.date,
        slug: convertDateToSlug(p.date)
    },
    comments: [],
    author: find(authors, {id: "author-" + p.author}),
    excerpt: p.excerpt.rendered,
    content: p.content.rendered
});






export const loadAuthors = async () => {
    let entry = await wp.users();
    
    const total = entry._paging.total;

    const numPages = Math.ceil(total/20);

    let promises = [];
    
    for(let i = 0; i < numPages; i++){
        promises.push(wp.users().page(i + 1).perPage(20));
    }

    Promise.allSettled(promises).then((results) => {

        let usersFromWP = [];

        results.forEach(r => usersFromWP = usersFromWP.concat(r.value));

        authors = usersFromWP.map(convertToAuthor);
    });


}


const loadTags = async () => {
    
    let entry = await wp.tags();
    
    const total = entry._paging.total;

    const numPages = Math.ceil(total/20);

    let promises = [];
    
    for(let i = 0; i < numPages; i++){
        promises.push(wp.tags().page(i + 1).perPage(20));
    }

    Promise.allSettled(promises).then((results) => {

        let tagsFromWP = [];

        results.forEach(r => tagsFromWP = tagsFromWP.concat(r.value));

        tags = tagsFromWP.map(convertToTag);
    });

    
}


const loadCategories = async () => {

    let entry = await wp.categories();
    
    const total = entry._paging.total;
    
    numCategories = total;

    const numPages = Math.ceil(total/20);

    let promises = [];
    
    for(let i = 0; i < numPages; i++){
        promises.push(wp.categories().page(i + 1).perPage(20));
    }

    Promise.allSettled(promises).then((results) => {

        let categoriesFromWP = [];

        results.forEach(r => categoriesFromWP = categoriesFromWP.concat(r.value));

        categories = categoriesFromWP.map(convertToCategory);
    });
    
    
}



const loadNumCategories = async () => {/* Already done on loadCategories() */}

const loadNumPosts = async () => {
    let entry = await wp.posts();
    
    const total = entry._paging.total;
    
    numPosts = total;

}

export const loadPosts = async (currentPage, numItemsPerPage) => {
    const totalPostsNeeded = currentPage*numItemsPerPage + 1;

    if(totalPostsNeeded <= posts.length) return;

    let newPosts = await wp.posts().offset(posts.length).perPage(totalPostsNeeded - posts.length);


    posts = posts.concat(newPosts.map(convertToPost));

}



const getEntriesOnPage = (entries, numItemsPerPage, pageNum, numEntries) => {
    const prevPage = pageNum - 1;
            
    let beginID = prevPage*numItemsPerPage,
        endID = pageNum*numItemsPerPage;
    

    const endPrev = beginID === 0;
    const endNext = endID > numEntries - 1;

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
export const initData = async () => {
    
    await loadAuthors();
    await loadTags();
    await loadCategories();
    await loadNumCategories();
    await loadNumPosts();
    await loadPosts(2, 4);

}



/* POST */
export const getMainPost = (mainPostID) => {

    if(!mainPostID) return posts[0];
    

    return find(posts, {id: mainPostID});
}


export const getDisplayedPosts =  (mainPostID, numItemsPerPage, pageNum) => {
        
    let otherPosts = getOtherPosts(mainPostID);
    

    return getEntriesOnPage(otherPosts, numItemsPerPage, pageNum, numPosts);

}

export const getNumPosts = () => numPosts;



/* CATEGORIES */
export const getNumCategories = () => numCategories;

export const getDisplayedCategories = (numItemsPerPage, currentPage) => getEntriesOnPage(categories, numItemsPerPage, currentPage, numCategories);

export const  getCategory = async (slug, numItemsPerPage, pageNum) => {
    let cat = await wp.categories().slug(slug);

    let ps = await wp.posts().categories(cat.id);
    

    ps = ps.map(convertToPost).map(p => ({
                            title: p.title,
                            idInfo:{
                                slug: p.slug
                            },
                            date_created: p.date_created,
                            author: p.author,
                            excerpt: p.excerpt
                        }));
    
    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum);

    cat = convertToCategory(cat);

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
export const getSinglePost = async (slug) => {
    let p = wp.posts().slug(slug);

    return convertToPost(p);
}

/* TAGS LIST */
export const getTagsList = () => {

    return tags;
}

export const  getTag = async (name, numItemsPerPage, pageNum) => {
    let tag = find(tags, {name: name});

    let ps = await wp.posts().tags(tag.idFromWP);
    

    ps = ps.map(convertToPost).map(p => ({
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

const getDatesListFromData = () => {

    return reduce(posts, (dsL, p) => {
        if(dsL.indexOf(p.date_created) === -1){
            dsL.push(p.date_created);

        }
        return dsL;

    }, []);
}


export const getDatesList = () => {
    let datesList = getDatesListFromData().map(date => ({
                                                    name: date,
                                                    idInfo: {
                                                        slug: convertDateToSlug(date)
                                                    }
                                                })); 
    
    
    return datesList;
}

/* SINGLE DATE PAGE */
export const getPostsOnDate = async (slug, numItemsPerPage, pageNum) => {
    const dates = getDatesList();

    let date = find(dates, {idInfo: {slug: slug}});
    
    let theDay = new Date(date);
    let theDayAfter = new Date(date);
    theDayAfter.setDate(theDayAfter.getDate() + 1);

    let ps = await wp.posts()
                    .before(theDayAfter)
                    .after(theDay);
    
    
    
    ps = ps.map(convertToPost).map(p => ({
                                            title: p.title,
                                            idInfo:{
                                                slug: p.slug
                                            },
                                            date_created: p.date_created,
                                            author: p.author,
                                            excerpt: p.excerpt
                                        }));
    
    

    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum, ps.length);

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



export const getAuthor = async (slug, numItemsPerPage, pageNum) => {
    let author = await wp.users().slug(slug);
    
    let ps = await wp.posts().users(author.id);
    
    ps = ps.map(convertToPost)
            .map(p => ({
                title: p.title,
                idInfo:{
                    slug: p.slug
                },
                date_created: p.date_created,
                author: p.author,
                excerpt: p.excerpt
            }));
    const [displayedPosts, endPrev, endNext] = getEntriesOnPage(ps, numItemsPerPage, pageNum, ps.length);

    convertToAuthor(author).posts = {
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    
    return author;
}


/* COMMENTS */
export const addComment = ({postID, author, content}) => {
    // const i = posts.findIndex((p) => p.id === postID);
    // const comments = posts[i].comments.slice();
    // comments.unshift({author: author, content: content})
    // posts[i].comments = comments;

    
}













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

