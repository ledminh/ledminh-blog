import { getCategory, initData, loadPosts, getTag } from "../data";
import { SET_CURRENT_PAGE as SET_CURRENT_PAGE_AT_HOME} from "./home/actionTypes";
import { setSingleCategoryDataReady } from "./singleCategory/actions";
import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_CATEGORY } from "./singleCategory/actionTypes";
import { SET_CURRENT_TAG, SET_CURRENT_PAGE as SET_CURRENT_PAGE_SINGLE_TAG } from "./singleTagPage/actionTypes";
import {setSingleTagDataReady} from "./singleTagPage/actions";

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