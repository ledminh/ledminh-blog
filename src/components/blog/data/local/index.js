import { find } from "lodash";

import { posts as postsLocal, 
        categories as categoriesLocal, 
        tags as tagsLocal, 
        authors as authorsLocal, 
        getPostsFromCategoriesData, 
        getPostFromData,
        getPostsOnDateFromData,
        getPostsFromTagData,
        getPostsFromAuthorData,
        getDatesListFromData
    } from "./data"

const convertTitleToSlug = (title) => title.toLowerCase().split(" ").splice(0).join("-");
export const convertDateToSlug = (date) => date.replace(',', '').toLowerCase().split(" ").splice(0).join("-");


const convertToAuthor = a => ({
    id: a.id,
    name: a.name,
    slogan: a.slogan,
    bio: {
        text: a.bio.text
    },
    profilePicture: {
        url: a.profilePicture.url
    },
    idInfo: {
        slug: a.username
    }
});


const convertToTag = t => ({
    id: t.id,
    name: t.name,
    idInfo: {
        name: t.name
    }
});


const convertToCategory = c => ({
    id: c.id,
    feature_image_url: c.feature_image_url,
    title: c.title,
    idInfo: {
        slug: c.slug
    },
    meta_data: {
        cat_subtitle: c.meta_data.cat_subtitle
    }
});


const convertToPost = p => ({
    id: p.id,
    title: p.title,
    slug: convertTitleToSlug(p.title),
    feature_image_url: p.feature_image_url,
    categories: p.categoryIDs.map((catID) => {

        let cat = find(categories, {id: catID});

        return {
            title: cat.title,
            slug: cat.idInfo.slug
        }
    }),


    tags: p.tagIDs.map(tagID => {
        let tag = find(tags, {id: tagID});
        return tag.name
    }),
    date_created: {
        text: p.date_created,
        slug: convertDateToSlug(p.date_created)
    },
    comments: p.comments,
    author: find(authors, {id: p.authorID}),
    excerpt: p.excerpt,
    content: p.content
});

let numPosts = -1;
let posts = [];

let numCategories = -1;
let categories = [];

let tags = [];

let authors = [];




const loadAuthors = () => {

    authors = authorsLocal.map(convertToAuthor);
}

const loadTags = () => {
    tags = tagsLocal.map(convertToTag);
}


const loadCategories = () => {

    categories = categoriesLocal.map(convertToCategory);
    
}



const loadNumCategories = () => numCategories = categoriesLocal.length;

const loadNumPosts = () => numPosts = postsLocal.length;

const loadPosts = (totalPostsNeeded) => {

    let newPosts = postsLocal.slice(posts.length, totalPostsNeeded);

    newPosts = newPosts.map(convertToPost);
    
    posts = posts.concat(newPosts);
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
export const initData = () => {
    loadAuthors();
    loadTags();
    loadCategories();
    loadNumCategories();
    loadNumPosts();
    loadPosts(9);

}

initData();


/* POST */
export const getMainPost = (mainPostID) => {

    if(!mainPostID) return posts[0];
    

    return find(posts, {id: mainPostID});
}


export const getDisplayedPosts = (mainPostID, numItemsPerPage, pageNum) => {
    let totalPostsNeeded = numItemsPerPage*pageNum + 1;

    if(totalPostsNeeded > posts.length){
        loadPosts(totalPostsNeeded);
    }
    
    let otherPosts = getOtherPosts(mainPostID);
    
    return getEntriesOnPage(otherPosts, numItemsPerPage, pageNum, numPosts);

}

export const getNumPosts = () => numPosts;



/* CATEGORIES */
export const getNumCategories = () => numCategories;

export const getDisplayedCategories = (numItemsPerPage, currentPage) => getEntriesOnPage(categories, numItemsPerPage, currentPage, numCategories);

export const  getCategory = (slug, numItemsPerPage, pageNum) => {
    let cat = find(categories, {idInfo: {slug: slug}});
    
    let ps = getPostsFromCategoriesData(cat);

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
    let p = getPostFromData(slug);

    return convertToPost(p);
}

/* TAGS LIST */
export const getTagsList = () => {

    return tags;
}

export const  getTag = (name, numItemsPerPage, pageNum) => {
    let tag = find(tags, {name: name});

    let ps = getPostsFromTagData(tag);

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
export const getPostsOnDate = (slug, numItemsPerPage, pageNum) => {
    const dates = getDatesList();

    let date = find(dates, {idInfo: {slug: slug}});
    
    let ps = getPostsOnDateFromData(date.name);

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



export const getAuthor = (slug, numItemsPerPage, pageNum) => {
    let author = find(authors, {idInfo: {slug: slug}});
    let ps = getPostsFromAuthorData(author);
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