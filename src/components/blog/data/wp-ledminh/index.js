import { find, reduce, filter } from "lodash";
import { convertDateToSlug } from "../utils";


import WPAPI from 'wpapi';
import { CategoryImageURL } from "../../assets/imageLinks";

let numCategoriesFromData = -1;

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
    idFromData: t.id,
    name: t.name,
    idInfo: {
        name: t.name
    }
});


const convertToCategory = c => ({
    id: "cat-" + c.id,
    idFromData: c.id,
    featureImage: {
        url: CategoryImageURL
    },
    title: c.name,
    idInfo: {
        slug: c.slug
    },
    meta_data: {
        cat_subtitle: c.description
    }
});

const formatDate = (d) => (new Date(d)).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})

const convertToPost = p => ({
    id: "post-" + p.id,
    title: p.title.rendered,
    slug: p.slug,
    featureImage: {
        url: p.jetpack_featured_media_url 
    },
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
        text: formatDate(p.date),
        slug: convertDateToSlug(formatDate(p.date))
    },

    comments: [],
    author: find(authors, {id: "author-" + p.author}),
    excerpt: (p.excerpt.rendered.length > 300)? p.excerpt.rendered.substring(0,300) : p.excerpt.rendered,
    content: p.content.rendered



});

/* common functions */
const loadAuthorsFromData = async () => {
    let entry = await wp.users();
    
    const total = entry._paging.total;

    const numPages = Math.ceil(total/20);

    let promises = [];
    
    for(let i = 0; i < numPages; i++){
        promises.push(wp.users().page(i + 1).perPage(20));
    }

    let results =  await Promise.allSettled(promises);
    
    let usersFromWP = [];

    results.forEach(r => usersFromWP = usersFromWP.concat(r.value));

    return usersFromWP;
}

const loadTagsFromData = async () => {
    let entry = await wp.tags();
    
    const total = entry._paging.total;

    const numPages = Math.ceil(total/20);

    let promises = [];
    
    for(let i = 0; i < numPages; i++){
        promises.push(wp.tags().page(i + 1).perPage(20));
    }

    let results = await Promise.allSettled(promises);

    let tagsFromWP = [];

    results.forEach(r => tagsFromWP = tagsFromWP.concat(r.value));

    return tagsFromWP;
}

const loadCategoriesFromData = async () => {
    let entry = await wp.categories();
    
    const total = entry._paging.total;
    
    numCategoriesFromData = total;

    const numPages = Math.ceil(total/20);

    let promises = [];
    
    for(let i = 0; i < numPages; i++){
        promises.push(wp.categories().page(i + 1).perPage(20));
    }

    let results = await Promise.allSettled(promises);

    let categoriesFromWP = [];

    results.forEach(r => categoriesFromWP = categoriesFromWP.concat(r.value));

    return categoriesFromWP;
}

const loadNumCategoriesFromData = async () => {
    return new Promise((resolve, reject) => {
        resolve(numCategoriesFromData) 
    });
}

const loadNumPostsFromData = async () => {
    let entry = await wp.posts();
    
    const total = entry._paging.total;

    return total;
}

const loadPostsFromData = async (totalPostsNeeded, postsLength) => {
    let newPosts = await wp.posts().offset(postsLength).perPage(totalPostsNeeded - postsLength);

    return newPosts;
}


const loadPostsOfCategoryFromData = async (catIDFromData) => {
    let ps = await wp.posts().categories(catIDFromData);

    return ps;
}

const loadSinglePostFromData = async (slug) => {
    let p = await wp.posts().slug(slug);

    return p[0];
}

const loadPostsOfTagFromData = async (tagIDFromData) => {
    let ps = await wp.posts().tags(tagIDFromData);

    return ps;
}

const loadPostsOnDateFromData = async (dateName) => {
    return new Promise((resolve, reject) => {

        resolve(posts.filter(p => p.date_created.text === dateName));
    });
}

const loadPostsOfAuthorFromData = async (author) => {
    return new Promise((resolve, reject) => {
        
        let ps = filter(posts, {author: {name: author.name}})
        
        resolve(ps);
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

const loadDatesListFromData =  async () => {
    return new Promise((resolve, reject) => {
        let dl = reduce(posts, (dsL, p) => {
        
            if(!find(dsL, {text: p.date_created.text})){
                dsL.push(p.date_created);
    
            }
            return dsL;
    
        }, []);
    
        
    
        resolve(dl);
    });

    
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

    let ps = await loadPostsOfTagFromData(tag.idFromData)
   
    

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
        data: ps,
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









