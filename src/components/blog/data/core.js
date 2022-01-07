import { find } from "lodash";

import * as local from "./local";
import * as wp_source from "./wp-ledminh";



let numPosts = -1;
let posts = [];

let numCategories = -1;
let categories = [];

let tags = [];

let authors = [];



let convertToAuthor, convertToTag, 
    convertToCategory, convertToPostMaker, 
    loadAuthorsFromData, loadTagsFromData,
    loadCategoriesFromData, loadNumCategoriesFromData,
    loadNumPostsFromData, loadPostsFromData,
    loadPostsOfCategoryFromData, loadSinglePostFromData,
    loadPostsOfTagFromData, loadDatesListFromData, 
    loadPostsOnDateFromData, loadPostsOfAuthorFromData;



const loadAuthors = async () => {
    let authorsFromData = await loadAuthorsFromData();
    authors = authorsFromData.map(convertToAuthor);
}


const loadTags = async () => {
    let tagsFromData = await loadTagsFromData();
    tags = tagsFromData.map(convertToTag);
}


const loadCategories = async () => {
    let categoriesFromData = await loadCategoriesFromData();
    categories = categoriesFromData.map(convertToCategory); 
}

const loadNumCategories = async () => {
    let numCatsFromData = await loadNumCategoriesFromData();
    numCategories = numCatsFromData;
}

const loadNumPosts = async () => {
    let numPostsFromData = await loadNumPostsFromData();
    numPosts = numPostsFromData;

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
                    featureImage: oP.featureImage,
                    title: oP.title,
                    meta_data: {
                        date_created: oP.date_created,
                        author: oP.author
                    }
                }));
}

/* PUBLIC METHODS
-------------------------------*/
export const LOCAL_DATA = "BLOG/LOCAL_DATA";
export const WP_DATA = "BLOG/WP_DATA";


export const init = async (dataSource, wp_address) => {
    numPosts = -1;
    posts = [];

    numCategories = -1;
    categories = [];

    tags = [];

    authors = [];
    
    if(dataSource === WP_DATA){
        await wp_source.loadAPI(wp_address);
        
        convertToAuthor = wp_source.convertToAuthor; 
        convertToTag = wp_source.convertToTag; 
        convertToCategory = wp_source.convertToCategory; 
        convertToPostMaker = wp_source.convertToPostMaker; 
        loadAuthorsFromData = wp_source.loadAuthorsFromData; 
        loadTagsFromData = wp_source.loadTagsFromData;
        loadCategoriesFromData = wp_source.loadCategoriesFromData; 
        loadNumCategoriesFromData = wp_source.loadNumCategoriesFromData;
        loadNumPostsFromData = wp_source.loadNumPostsFromData; 
        loadPostsFromData = wp_source.loadPostsFromData;
        loadPostsOfCategoryFromData = wp_source.loadPostsOfCategoryFromData; 
        loadSinglePostFromData = wp_source.loadSinglePostFromData;
        loadPostsOfTagFromData = wp_source.loadPostsOfTagFromData; 
        loadDatesListFromData = wp_source.loadDatesListFromData; 
        loadPostsOnDateFromData = wp_source.loadPostsOnDateFromData; 
        loadPostsOfAuthorFromData = wp_source.loadPostsOfAuthorFromData;
        
    }
    else if(dataSource === LOCAL_DATA) {
        convertToAuthor = local.convertToAuthor; 
        convertToTag = local.convertToTag; 
        convertToCategory = local.convertToCategory; 
        convertToPostMaker = local.convertToPostMaker; 
        loadAuthorsFromData = local.loadAuthorsFromData; 
        loadTagsFromData = local.loadTagsFromData;
        loadCategoriesFromData = local.loadCategoriesFromData; 
        loadNumCategoriesFromData = local.loadNumCategoriesFromData;
        loadNumPostsFromData = local.loadNumPostsFromData; 
        loadPostsFromData = local.loadPostsFromData;
        loadPostsOfCategoryFromData = local.loadPostsOfCategoryFromData; 
        loadSinglePostFromData = local.loadSinglePostFromData;
        loadPostsOfTagFromData = local.loadPostsOfTagFromData; 
        loadDatesListFromData = local.loadDatesListFromData; 
        loadPostsOnDateFromData = local.loadPostsOnDateFromData; 
        loadPostsOfAuthorFromData = local.loadPostsOfAuthorFromData;
        
    }


    await loadAuthors();
    await loadTags();
    await loadCategories();
    await loadNumCategories();
    await loadNumPosts();
    await loadPosts(2, 4);

    return {
        loadPosts, getMainPost, 
        getDisplayedPosts, getNumPosts, 
        getNumCategories, getDisplayedCategories,
        getCategory, getSinglePost, getTagsList,
        getTag, getDatesList, getPostsOnDate, 
        getAuthorsList, getAuthor, addComment
    }
}






export const loadPosts = async (currentPage, numItemsPerPage) => {
    const totalPostsNeeded = currentPage*numItemsPerPage + 1;

    if(totalPostsNeeded <= posts.length) return;

    let newPosts = await loadPostsFromData(totalPostsNeeded, posts.length);
    const convertToPost = convertToPostMaker(categories, tags, authors);
    newPosts = newPosts.map(convertToPost);
    
    posts = posts.concat(newPosts);

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

export const  getCategory = async (slug, numItemsPerPage, pageNum, currentCat) => {
    if(!slug){
        const [displayedPosts, endPrev, endNext] = getEntriesOnPage(currentCat.posts.data, numItemsPerPage, pageNum, currentCat.posts.data.length);
        let newCat = {
            ...currentCat,
            posts: {
                ...currentCat.posts,
                displayedPosts: displayedPosts,
                endPrev: endPrev,
                endNext: endNext
            },
            currentPage: pageNum
        }

        return newCat;
    }

    let cat = find(categories, {idInfo: {slug: slug}});    

    
    let ps = await loadPostsOfCategoryFromData(cat.idFromData);
    const convertToPost = convertToPostMaker(categories, tags, authors);
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
        data: ps,
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    

    return cat;
    
}

/* SINGLE POST */
export const getSinglePost = async (slug) => {
    let p = await loadSinglePostFromData(slug);
    const convertToPost = convertToPostMaker(categories, tags, authors);
    return convertToPost(p);


}

/* TAGS LIST */
export const getTagsList = () => {

    return tags;
}

export const  getTag = async (name, numItemsPerPage, pageNum, currentTag) => {
    
    return new Promise((resolve, reject) => {
        if(!name) {
            const [displayedPosts, endPrev, endNext] = getEntriesOnPage(currentTag.posts.data, numItemsPerPage, pageNum, currentTag.posts.data.length);
            let newTag = {
                ...currentTag,
                posts: {
                    ...currentTag.posts,
                    displayedPosts: displayedPosts,
                    endPrev: endPrev,
                    endNext: endNext
                },
                currentPage: pageNum
            }
    
            resolve(newTag);
    
        }
    
        let tag = find(tags, {name: name});
        
        if(!tag) reject(new Error("tag with name " + name +  " not found on the database"));
        else {
            loadPostsOfTagFromData(tag.idFromData).then((ps)=> {
                const convertToPost = convertToPostMaker(categories, tags, authors);
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
                    data: ps,
                    displayedPosts: displayedPosts,
                    totalPosts: ps.length,
                    endPrev: endPrev,
                    endNext: endNext
                };
            
                resolve(tag);
            }).catch((error) => reject(error));
        }

    
        
    });
    
    


    
    
}

/* DATES LIST */
export const getDatesList = async () => {
    let datesList = await loadDatesListFromData(posts);
    datesList = datesList.map(date => ({ name: date.text,
                                                idInfo: {
                                                    slug: date.slug
                                                }
                                            })); 
                                                    
    
    

    return datesList;
}

/* SINGLE DATE PAGE */
export const getPostsOnDate = async (slug, numItemsPerPage, pageNum, currentDate) => {
    if(!slug) {
        const [displayedPosts, endPrev, endNext] = getEntriesOnPage(currentDate.posts.data, numItemsPerPage, pageNum, currentDate.posts.data.length);

        let newDate = {
            ...currentDate,
            posts: {
                ...currentDate.posts,
                displayedPosts: displayedPosts,
                endPrev: endPrev,
                endNext: endNext
            },
            currentPage: pageNum
        }

        return newDate;
    }

    const dates = await getDatesList();

    let date = find(dates, {idInfo: {slug: slug}});
    
    const convertToPost = convertToPostMaker(categories, tags, authors);
    let ps = await loadPostsOnDateFromData(date.name, convertToPost, posts);

    ps = ps.map(p => ({
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
        data: ps,
        displayedPosts: displayedPosts,
        totalPosts: ps.length,
        endPrev: endPrev,
        endNext: endNext
    };

    
    return date;
    
    
}

/* AUTHORS LIST */
export const getAuthorsList = () => authors;



export const getAuthor = async (slug, numItemsPerPage, pageNum, currentAuthor) => {
    return new Promise((resolve, reject) => {
        if(!slug) {
            const [displayedPosts, endPrev, endNext] = getEntriesOnPage(currentAuthor.posts.data, numItemsPerPage, pageNum, currentAuthor.posts.data.length);
    
            let newAuthor = {
                ...currentAuthor,
                posts: {
                    ...currentAuthor.posts,
                    displayedPosts: displayedPosts,
                    endPrev: endPrev,
                    endNext: endNext
                },
                currentPage: pageNum
            }
    
            resolve(newAuthor);
        }
    
    
        let author = find(authors, {idInfo: {slug: slug}});
        
        if(!author) reject(new Error("Author " + author + " not found"));
        else {
            const convertToPost = convertToPostMaker(categories, tags, authors);
    
            loadPostsOfAuthorFromData(author, convertToPost, posts).then((ps) => {
                ps = ps.map(p => ({
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

                
                resolve(author);
            })
            .catch((error) => reject(error));
        }
        

        
    });
    

    
}


/* COMMENTS */
export const addComment = ({postID, author, content}) => {
    const i = posts.findIndex((p) => p.id === postID);
    const comments = posts[i].comments.slice();
    comments.unshift({author: author, content: content})
    posts[i].comments = comments;

    
}
