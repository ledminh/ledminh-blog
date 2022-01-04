import { find, reduce } from "lodash";
import { convertTitleToSlug, convertDateToSlug } from "../utils";
import { posts as postsLocal, 
        categories as categoriesLocal, 
        tags as tagsLocal, 
        authors as authorsLocal
    } from "./data"



let numPosts = -1;
let posts = [];

let numCategories = -1;
let categories = [];

let tags = [];

let authors = [];



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
    idFromData: t.id,
    name: t.name,
    idInfo: {
        name: t.name
    }
});


const convertToCategory = c => ({
    id: c.id,
    idFromData: c.id,
    featureImage: {
        url: c.feature_image_url
    },
    title: c.title,
    idInfo: {
        slug: c.slug
    },
    meta_data: {
        cat_subtitle: c.meta_data.cat_subtitle
    }
});

const formatDate = (d) => (new Date(d)).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})

const convertToPost = p => ({
    id: p.id,
    title: p.title,
    slug: convertTitleToSlug(p.title),
    featureImage: {
        url: p.feature_image_url 
    },
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
        text: formatDate(p.date_created),
        slug: convertDateToSlug(p.date_created)
    },
    comments: p.comments,
    author: find(authors, {id: p.authorID}),
    excerpt: p.excerpt,
    content: p.content
});



/* common functions */

const loadAuthorsFromData = async () => {
    return new Promise((resolve, reject) => {
        let authorsFromData = authorsLocal;

        resolve(authorsFromData);
    })
}

const loadTagsFromData = async () => {
    return new Promise((resolve, reject) => {
        let tagsFromData = tagsLocal;

        resolve(tagsFromData);
    })
}

const loadCategoriesFromData = async () => {
    return new Promise((resolve, reject) => {
        let categoriesFromData = categoriesLocal;

        resolve(categoriesFromData);
    });

}

const loadNumCategoriesFromData = async () => {
    return new Promise((resolve, reject) => {
        let numCategoriesFromData = categoriesLocal.length;
        resolve(numCategoriesFromData);
    });
}

const loadNumPostsFromData = async () => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.length);
    })
}

const loadPostsOfCategoryFromData = async (idFromData) => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.filter(p => p.categoryIDs.indexOf(idFromData) !== -1));
    });
}

const loadSinglePostFromData = async (slug) => {
    return new Promise((resolve, reject) => {
        let p = find(postsLocal, (p) => convertTitleToSlug(p.title) === slug);

        resolve(p);
    })

}

const loadPostsOfTagFromData = async (tagIDFromData) => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.filter(p => p.tagIDs.indexOf(tagIDFromData) !== -1));
    });
}


const loadDatesListFromData = async () => {
    return new Promise((resolve, reject) => {
        let dl = reduce(postsLocal, (dsL, p) => {
        
            if(!find(dsL, {text: p.date_created})){
                dsL.push({
                    text: p.date_created,
                    slug: convertDateToSlug(p.date_created)
                });
    
            }
            return dsL;
    
        }, []);
    
        
    
        resolve(dl);
    });
}

const loadPostsOnDateFromData = async (dateName) => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.map(convertToPost).filter((p) => p.date_created.text === dateName));
    });
}

const loadPostsOfAuthorFromData = async (author) => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.filter(p => p.authorID === author.id).map(convertToPost));
    });
}
/* ****************************************************************** */

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


const loadPostsFromData = async (totalPostsNeeded, postsLength) => {

    return new Promise((resolve, reject) => {
        let newPosts = postsLocal.slice(posts.length, totalPostsNeeded);

        resolve(newPosts);
    });
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
export const loadPosts = async (currentPage, numItemsPerPage) => {
    const totalPostsNeeded = currentPage*numItemsPerPage + 1;

    if(totalPostsNeeded <= posts.length) return;

    let newPosts = await loadPostsFromData(totalPostsNeeded, posts.length);

    newPosts = newPosts.map(convertToPost);
    
    posts = posts.concat(newPosts);

    
}


export const initData = async () => {
    await loadAuthors();
    
    await loadTags();
    await loadCategories();
    await loadNumCategories();
    await loadNumPosts();
    await loadPosts(2,4);

}



/* POST */
export const getMainPost = (mainPostID) => {

    if(!mainPostID) return posts[0];
    

    return find(posts, {id: mainPostID});
}


export const getDisplayedPosts = (mainPostID, numItemsPerPage, pageNum) => {
    
    
    let otherPosts = getOtherPosts(mainPostID);
    
    return getEntriesOnPage(otherPosts, numItemsPerPage, pageNum, numPosts);

}

export const getNumPosts = () => numPosts;



/* CATEGORIES */
export const getNumCategories = () => numCategories;

export const getDisplayedCategories = (numItemsPerPage, currentPage) => getEntriesOnPage(categories, numItemsPerPage, currentPage, numCategories);

export const  getCategory = async (slug, numItemsPerPage, pageNum, currentCat) => {
    if(!slug) {
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

/* CATEGORIES */
export const getSinglePost = async (slug) => {
    let p = await loadSinglePostFromData(slug);
    
    return convertToPost(p);


}

/* TAGS LIST */
export const getTagsList = () => {

    return tags;
}

export const  getTag = async (name, numItemsPerPage, pageNum, currentTag) => {
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

        return newTag;

    }

    let tag = find(tags, {name: name});

    let ps = await loadPostsOfTagFromData(tag.idFromData);

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

    return tag;


    
    
}

/* DATES LIST */
export const getDatesList = async () => {
    let datesList = await loadDatesListFromData();
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
    
    let ps = await loadPostsOnDateFromData(date.name);

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

        return newAuthor;
    }


    let author = find(authors, {idInfo: {slug: slug}});
    
    let ps = await loadPostsOfAuthorFromData(author);
    
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