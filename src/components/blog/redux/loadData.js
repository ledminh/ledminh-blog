import { getCategory, initData, loadPosts, getTag, getPostsOnDate, getAuthor, getSinglePost } from "../data";
import { SET_CURRENT_PAGE as SET_CURRENT_PAGE_AT_HOME} from "./home/actionTypes";
import { setSingleCategoryDataReady } from "./singleCategory/actions";
import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_CATEGORY } from "./singleCategory/actionTypes";
import { SET_CURRENT_TAG, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_TAG } from "./singleTagPage/actionTypes";

import {setSingleTagDataReady} from "./singleTagPage/actions";
import { SET_CURRENT_DATE, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_DATE } from "./singleDatePage/actionTypes";

import {setSingleDateDataReady} from "./singleDatePage/actions";
import { SET_CURRENT_AUTHOR, SET_CURRENT_PAGE as SET_CURRENT_PAGE_AUTHOR_PAGE } from "./authorPage/actionTypes";

import { setAuthorPageDataReady } from "./authorPage/actions";
import { SET_CURRENT_SINGLE_POST } from "./singlePost/actionTypes";

import { setSinglePostDataReady } from "./singlePost/actions";


/* Signal that Data has already been Initialized */
export const DATA_INITIALIZED = "BLOG/DATA_INITIALIZED";
const dataInitialized = () => ({type: DATA_INITIALIZED});

export const dataInitializedReducer = (state = false, action) => {

    if(action.type === DATA_INITIALIZED){
        return true;
    }

    return state;
}


/* Initialize Data */
export const initializeData = async (dispatch, getState) => {
    await initData();

    dispatch(dataInitialized());
}

export const initializeDataAction = () => initializeData;



/* getDisplayedPosts at Home */
export const DISPLAY_POSTS_AT_HOME_DONE = "BLOG/LOAD_DATA/DISPLAY_POSTS_DONE";
const displayedPostsAtHomeDone = (page) => ({type: DISPLAY_POSTS_AT_HOME_DONE, page: page});



export const homeMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_PAGE_AT_HOME) {
        const currentPage = action.page;
        const numItemsPerPage = storeAPI.getState().home.data.numItemsPerPage; 

        loadPosts(currentPage, numItemsPerPage).then(() => {
            storeAPI.dispatch(displayedPostsAtHomeDone(currentPage));
        });
    }


    return next(action);

}

/*SINGLE CATEGORY*/
export const SET_CURRENT_CATEGORY_DONE = "BLOG/LOAD_DATA/SET_CURRENT_CATEGORY_DONE";

export const setCurrentCategoryDone = (cat) => ({type: SET_CURRENT_CATEGORY_DONE, cat: cat});

export const SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE";

export const setCurrentCategoryCurrentPageDone = (cat) => ({type: SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE, cat: cat});



export const singleCategoryMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_CATEGORY){
        storeAPI.dispatch(setSingleCategoryDataReady(false));
        let slug = action.slug;
        let numItemsPerPage = storeAPI.getState().singleCategory.numItemsPerPage;

        getCategory(slug, numItemsPerPage, 1).then(cat => {
            storeAPI.dispatch(setCurrentCategoryDone(cat));
        });

        

    }

    if(action.type === SET_CURRENT_PAGE_SINGLE_CATEGORY) {
        let cat = storeAPI.getState().singleCategory;
        let numItemsPerPage = cat.numItemsPerPage;
        let currentPage = action.page;
        
        getCategory(undefined, numItemsPerPage, currentPage, cat).then(cat => {
            storeAPI.dispatch(setCurrentCategoryCurrentPageDone(cat));
        });
    }
    

    return next(action);

}


/*SINGLE TAG*/
export const SET_CURRENT_TAG_DONE = "BLOG/LOAD_DATA/SET_CURRENT_TAG_DONE";

export const setCurrentTagDone = (tag) => ({type: SET_CURRENT_TAG_DONE, tag: tag});

export const SET_CURRENT_TAG_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_TAG_CURRENT_PAGE_DONE";

export const setCurrentTagCurrentPageDone = (tag) => ({type: SET_CURRENT_TAG_CURRENT_PAGE_DONE, tag: tag});



export const singleTagMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_TAG){
        storeAPI.dispatch(setSingleTagDataReady(false));
        let name = action.name;
        let numItemsPerPage = storeAPI.getState().singleTagPage.numItemsPerPage;

        getTag(name, numItemsPerPage, 1).then(tag => {
            storeAPI.dispatch(setCurrentTagDone(tag));
        });

        

    }

    if(action.type === SET_CURRENT_PAGE_SINGLE_TAG) {
        let tag = storeAPI.getState().singleTagPage;
        let numItemsPerPage = tag.numItemsPerPage;
        let currentPage = action.page;
        
        getTag(undefined, numItemsPerPage, currentPage, tag).then(tag => {
            storeAPI.dispatch(setCurrentTagCurrentPageDone(tag));
        });
    }
    

    return next(action);

}


/*SINGLE DATE*/
export const SET_CURRENT_DATE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_DATE_DONE";

export const setCurrentDateDone = (date) => ({type: SET_CURRENT_DATE_DONE, date: date});

export const SET_CURRENT_DATE_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_DATE_CURRENT_PAGE_DONE";

export const setCurrentDateCurrentPageDone = (date) => ({type: SET_CURRENT_DATE_CURRENT_PAGE_DONE, date: date});



export const singleDateMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_DATE){
        storeAPI.dispatch(setSingleDateDataReady(false));
        let slug = action.slug;
        let numItemsPerPage = storeAPI.getState().singleDatePage.numItemsPerPage;

        getPostsOnDate(slug, numItemsPerPage, 1).then(date => {
            storeAPI.dispatch(setCurrentDateDone(date));
        });

        

    }

    if(action.type === SET_CURRENT_PAGE_SINGLE_DATE) {
        let date = storeAPI.getState().singleDatePage;
        let numItemsPerPage = date.numItemsPerPage;
        let currentPage = action.page;
        
        getTag(undefined, numItemsPerPage, currentPage, date).then(date => {
            storeAPI.dispatch(setCurrentDateCurrentPageDone(date));
        });
    }
    

    return next(action);

}


/* AUTHOR PAGE */
export const SET_CURRENT_AUTHOR_DONE = "BLOG/LOAD_DATA/SET_CURRENT_AUTHOR_DONE";

export const setCurrentAuthorDone = (author) => ({type: SET_CURRENT_AUTHOR_DONE, author: author});

export const SET_AUTHOR_PAGE_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_AUTHOR_PAGE_CURRENT_PAGE_DONE";

export const setAuthorPageCurrentPageDone = (author) => ({type: SET_AUTHOR_PAGE_CURRENT_PAGE_DONE, author: author});



export const authorPageMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_AUTHOR){
        storeAPI.dispatch(setAuthorPageDataReady(false));
        let slug = action.slug;
        let numItemsPerPage = storeAPI.getState().authorPage.numItemsPerPage;

        getAuthor(slug, numItemsPerPage, 1).then(author => {
            storeAPI.dispatch(setCurrentAuthorDone(author));
        });

        

    }

    if(action.type === SET_CURRENT_PAGE_AUTHOR_PAGE) {
        let author = storeAPI.getState().authorPage;
        let numItemsPerPage = author.numItemsPerPage;
        let currentPage = action.page;
        
        getAuthor(undefined, numItemsPerPage, currentPage, author).then(author => {
            storeAPI.dispatch(setAuthorPageCurrentPageDone(author));
        });
    }
    

    return next(action);

}

/* Single Post Middleware  */
export const SET_SINGLE_POST_DONE = "BLOG/LOAD_DATA/SET_SINGLE_POST_DONE";
const setSinglePostDone = (post) => ({type: SET_SINGLE_POST_DONE, post: post});

export const singlePostMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_SINGLE_POST){
        storeAPI.dispatch(setSinglePostDataReady(false));

        getSinglePost(action.slug).then(post => {
            storeAPI.dispatch(setSinglePostDone(post));
        });
    }

    return next(action);

}