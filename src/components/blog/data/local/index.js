import { find, reduce } from "lodash";
import { convertTitleToSlug, convertDateToSlug, formatDate } from "../utils";
import { posts as postsLocal, 
        categories as categoriesLocal, 
        tags as tagsLocal, 
        authors as authorsLocal
    } from "./data"




export const convertToAuthor = a => ({
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


export const convertToTag = t => ({
    id: t.id,
    idFromData: t.id,
    name: t.name,
    idInfo: {
        name: t.name
    }
});


export const convertToCategory = c => ({
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


export const convertToPostMaker = (categories, tags, authors) => p => ({
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



export const loadAuthorsFromData = async () => {
    return new Promise((resolve, reject) => {
        let authorsFromData = authorsLocal;

        resolve(authorsFromData);
    })
}

export const loadTagsFromData = async () => {
    return new Promise((resolve, reject) => {
        let tagsFromData = tagsLocal;

        resolve(tagsFromData);
    })
}

export const loadCategoriesFromData = async () => {
    return new Promise((resolve, reject) => {
        let categoriesFromData = categoriesLocal;

        resolve(categoriesFromData);
    });

}

export const loadNumCategoriesFromData = async () => {
    return new Promise((resolve, reject) => {
        let numCategoriesFromData = categoriesLocal.length;
        resolve(numCategoriesFromData);
    });
}


export const loadNumPostsFromData = async () => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.length);
    })
}

export const loadPostsFromData = async (totalPostsNeeded, postsLength) => {

    return new Promise((resolve, reject) => {
        let newPosts = postsLocal.slice(postsLength, totalPostsNeeded);

        resolve(newPosts);
    });
}

export const loadPostsOfCategoryFromData = async (idFromData) => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.filter(p => p.categoryIDs.indexOf(idFromData) !== -1));
    });
}

export const loadSinglePostFromData = async (slug) => {
    return new Promise((resolve, reject) => {
        let p = find(postsLocal, (p) => convertTitleToSlug(p.title) === slug);

        resolve(p);
    })

}

export const loadPostsOfTagFromData = async (tagIDFromData) => {
    return new Promise((resolve, reject) => {
        resolve(postsLocal.filter(p => p.tagIDs.indexOf(tagIDFromData) !== -1));
    });
}


export const loadDatesListFromData = async (posts) => {
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

export const loadPostsOnDateFromData = async (dateName, convertToPost, posts) => {
    return new Promise((resolve, reject) => {

        resolve(postsLocal.map(convertToPost).filter((p) => p.date_created.text === dateName));
    });
}

export const loadPostsOfAuthorFromData = async (author, convertToPost, posts) => {
    return new Promise((resolve, reject) => {

        resolve(postsLocal.filter(p => p.authorID === author.id).map(convertToPost));
    });
}