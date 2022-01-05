import { find, reduce, filter } from "lodash";
import { convertDateToSlug, formatDate } from "../utils";


import WPAPI from 'wpapi';

import { CategoryImageURL } from "../../assets/imageLinks";

let numCategoriesFromData = -1;

let wp = undefined; 

export const loadAPI = async (wp_address) => {
    let address = wp_address? wp_address : "https://www.ledminh.com";

    wp = new WPAPI({endpoint: address + "/wp-json"});
}


export const convertToAuthor = a => ({
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


export const convertToTag = t => ({
    id: "tag-" + t.id,
    idFromData: t.id,
    name: t.name,
    idInfo: {
        name: t.name
    }
});


export const convertToCategory = c => ({
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


export const convertToPostMaker = (categories, tags, authors) => p => ({
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

export const loadAuthorsFromData = async () => {
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

export const loadTagsFromData = async () => {
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

export const loadCategoriesFromData = async () => {
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

export const loadNumCategoriesFromData = async () => {
    return new Promise((resolve, reject) => {
        resolve(numCategoriesFromData) 
    });
}

export const loadNumPostsFromData = async () => {
    let entry = await wp.posts();
    
    const total = entry._paging.total;

    return total;
}

export const loadPostsFromData = async (totalPostsNeeded, postsLength) => {
    let newPosts = await wp.posts().offset(postsLength).perPage(totalPostsNeeded - postsLength);

    return newPosts;
}


export const loadPostsOfCategoryFromData = async (catIDFromData) => {
    let ps = await wp.posts().categories(catIDFromData);

    return ps;
}

export const loadSinglePostFromData = async (slug) => {
    let p = await wp.posts().slug(slug);

    return p[0];
}

export const loadPostsOfTagFromData = async (tagIDFromData) => {
    let ps = await wp.posts().tags(tagIDFromData);

    return ps;
}

export const loadDatesListFromData =  async (posts) => {
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


export const loadPostsOnDateFromData = async (dateName, convertToPost, posts) => {
    return new Promise((resolve, reject) => {

        resolve(posts.filter(p => p.date_created.text === dateName));
    });
}

export const loadPostsOfAuthorFromData = async (author, convertToPost, posts) => {
    return new Promise((resolve, reject) => {
        
        let ps = filter(posts, {author: {name: author.name}})
        
        resolve(ps);
    });
}