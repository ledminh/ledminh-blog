import { getCategory, initData, loadPosts, getTag, getPostsOnDate, getAuthor, getSinglePost, LOCAL_DATA, WP_DATA } from "../data";
import { SET_CURRENT_PAGE as SET_CURRENT_PAGE_AT_HOME} from "./home/actionTypes";
import { setHomeDataReady } from "./home/actions";

import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_CATEGORY } from "./singleCategory/actionTypes";
import { SET_CURRENT_TAG, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_TAG } from "./singleTagPage/actionTypes";

import {setSingleTagDataReady} from "./singleTagPage/actions";
import { SET_CURRENT_DATE, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_DATE } from "./singleDatePage/actionTypes";

import {setSingleDateDataReady} from "./singleDatePage/actions";
import { SET_CURRENT_AUTHOR, SET_CURRENT_PAGE as SET_CURRENT_PAGE_AUTHOR_PAGE } from "./authorPage/actionTypes";

import { setAuthorPageDataReady } from "./authorPage/actions";
import { SET_CURRENT_SINGLE_POST } from "./singlePost/actionTypes";

import { setSinglePostDataReady } from "./singlePost/actions";
import { getDatesList } from "../data";

import { SET_DATES_LIST } from "./datesList/actionTypes";
import { setDatesListDataReady } from "./datesList/actions";
import { resetErrorAction } from "./error";
import { setFeatureImageURL } from "./featureImage/actions";
import { ErrorProfileImage } from "../assets/imageLinks";

/* Signal that Data has already been Initialized */
export const DATA_INITIALIZED = "BLOG/DATA_INITIALIZED";
const dataInitialized = (status) => ({type: DATA_INITIALIZED, status: status});

export const dataInitializedReducer = (state = false, action) => {

    if(action.type === DATA_INITIALIZED){
        return action.status;
    }

    return state;
}


/* Initialize Data */
export const initializeData = async (dispatch, getState) => {
    dispatch(dataInitialized(false));
    await initData(LOCAL_DATA);

    dispatch(dataInitialized(true));
}

export const initializeDataAction = () =>  initializeData;

/* Change data source */
const SET_DATA_SOURCE_LOCAL = "BLOG/DATA_SOURCE/SET_DATA_SOURCE_LOCAL";
const SET_DATA_SOURCE_WP = "BLOG/DATA_SOURCE/SET_DATA_SOURCE_WP";

export const setDataSourceLocalAction = () => ({type: SET_DATA_SOURCE_LOCAL})
export const setDataSourceWPAction = (wp_address) => ({type: SET_DATA_SOURCE_WP, wp_address: wp_address});

export const dataSourceMiddleware = storeAPI => next => action => {
    if(action.type === SET_DATA_SOURCE_LOCAL){
        storeAPI.dispatch(dataInitialized(false));

        initData(LOCAL_DATA).then(() => {
            storeAPI.dispatch(dataInitialized(true));
        });

        
    }

    if(action.type === SET_DATA_SOURCE_WP){
        storeAPI.dispatch(dataInitialized(false));
        
        initData(WP_DATA, action.wp_address).then(() => {
            storeAPI.dispatch(dataInitialized(true));
        });

        
    }

    return next(action);
}


/* getDisplayedPosts at Home */
export const DISPLAY_POSTS_AT_HOME_DONE = "BLOG/LOAD_DATA/DISPLAY_POSTS_DONE";
const displayedPostsAtHomeDone = (page) => ({type: DISPLAY_POSTS_AT_HOME_DONE, page: page});



export const homeMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_PAGE_AT_HOME) {
        storeAPI.dispatch(setHomeDataReady(false));
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

export const setCurrentCategoryDone = (cat, error) => ({type: SET_CURRENT_CATEGORY_DONE, cat: cat, error: error});

export const SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE";

export const setCurrentCategoryCurrentPageDone = (cat) => ({type: SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE, cat: cat});



export const singleCategoryMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_CATEGORY){
        storeAPI.dispatch(setFeatureImageURL(""));
        storeAPI.dispatch(resetErrorAction());
        storeAPI.dispatch(setSingleTagDataReady(false));

        let slug = action.slug;
        let numItemsPerPage = storeAPI.getState().singleCategory.numItemsPerPage;

        getCategory(slug, numItemsPerPage, 1)
        .then(cat => {
            storeAPI.dispatch(setCurrentCategoryDone(cat));
        })
        .catch((error) => {
            storeAPI.dispatch(setFeatureImageURL(ErrorProfileImage));
            storeAPI.dispatch(setCurrentCategoryDone(undefined, error));
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

export const setCurrentTagDone = (tag, error) => ({type: SET_CURRENT_TAG_DONE, tag: tag, error: error});

export const SET_CURRENT_TAG_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_TAG_CURRENT_PAGE_DONE";

export const setCurrentTagCurrentPageDone = (tag) => ({type: SET_CURRENT_TAG_CURRENT_PAGE_DONE, tag: tag});



export const singleTagMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_TAG){
        
        storeAPI.dispatch(setFeatureImageURL(""));
        storeAPI.dispatch(resetErrorAction());
        storeAPI.dispatch(setSingleTagDataReady(false));

        let name = action.name;
        let numItemsPerPage = storeAPI.getState().singleTagPage.numItemsPerPage;

        getTag(name, numItemsPerPage, 1).then(tag => {
            storeAPI.dispatch(setCurrentTagDone(tag));
        }) 
        .catch((error) => {
            storeAPI.dispatch(setFeatureImageURL(ErrorProfileImage));
            storeAPI.dispatch(setCurrentTagDone(undefined, error));
        });;

        

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

export const setCurrentDateDone = (date, error) => ({type: SET_CURRENT_DATE_DONE, date: date, error: error});

export const SET_CURRENT_DATE_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_CURRENT_DATE_CURRENT_PAGE_DONE";

export const setCurrentDateCurrentPageDone = (date) => ({type: SET_CURRENT_DATE_CURRENT_PAGE_DONE, date: date});



export const singleDateMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_DATE){
        storeAPI.dispatch(setFeatureImageURL(""));
        storeAPI.dispatch(resetErrorAction());
        storeAPI.dispatch(setSingleDateDataReady(false));

        let slug = action.slug;
        let numItemsPerPage = storeAPI.getState().singleDatePage.numItemsPerPage;

        getPostsOnDate(slug, numItemsPerPage, 1).then(date => {
            storeAPI.dispatch(setCurrentDateDone(date));
        })
        .catch((error) => {
            storeAPI.dispatch(setFeatureImageURL(ErrorProfileImage));
            storeAPI.dispatch(setCurrentDateDone(undefined, error));
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

export const setCurrentAuthorDone = (author, error) => ({type: SET_CURRENT_AUTHOR_DONE, author: author, error: error});

export const SET_AUTHOR_PAGE_CURRENT_PAGE_DONE = "BLOG/LOAD_DATA/SET_AUTHOR_PAGE_CURRENT_PAGE_DONE";

export const setAuthorPageCurrentPageDone = (author) => ({type: SET_AUTHOR_PAGE_CURRENT_PAGE_DONE, author: author});



export const authorPageMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_AUTHOR){
        storeAPI.dispatch(setFeatureImageURL(""));
        storeAPI.dispatch(resetErrorAction());
        storeAPI.dispatch(setAuthorPageDataReady(false));

        let slug = action.slug;
        let numItemsPerPage = storeAPI.getState().authorPage.numItemsPerPage;

        getAuthor(slug, numItemsPerPage, 1).then(author => {
            storeAPI.dispatch(setCurrentAuthorDone(author));
        })
        .catch((error) => {
            storeAPI.dispatch(setFeatureImageURL(ErrorProfileImage));
            storeAPI.dispatch(setCurrentAuthorDone(undefined, error));
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
const setSinglePostDone = (post, error) => ({type: SET_SINGLE_POST_DONE, post: post, error: error});

export const singlePostMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_SINGLE_POST){
        storeAPI.dispatch(setFeatureImageURL(""));
        storeAPI.dispatch(resetErrorAction());
        storeAPI.dispatch(setSinglePostDataReady(false));

        getSinglePost(action.slug)
            .then(post => {
                
                storeAPI.dispatch(setSinglePostDone(post));
            })
            .catch((error) => {
                storeAPI.dispatch(setFeatureImageURL(ErrorProfileImage));
                storeAPI.dispatch(setSinglePostDone(undefined, error));
            });
    }

    return next(action);

}

/* datesListMiddleware */
export const SET_DATES_LIST_DONE = "BLOG/LOAD_DATA/SET_DATES_LIST_DONE"; 
const setDatesListDone = (datesList) => ({type: SET_DATES_LIST_DONE, datesList: datesList});

export const datesListMiddleware =  storeAPI => next => action => {
    if(action.type === SET_DATES_LIST) {
        
        storeAPI.dispatch(setDatesListDataReady(false));
        

        getDatesList().then((datesList) => {
            storeAPI.dispatch(setDatesListDone(datesList));
        })
    }

    return next(action);
}