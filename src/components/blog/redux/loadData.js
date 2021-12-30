import { initData, loadPosts } from "../data";
import { SET_CURRENT_PAGE as SET_CURRENT_PAGE_AT_HOME} from "./home/actionTypes";

/* Signal that Data has already been Initialized */
export const DATA_INITIALIZED = "BLOG/DATA_INITIALIZED";
const dataInitialized = () => ({type: DATA_INITIALIZED});


/* Initialize Data */
export const initializeData = async (dispatch, getState) => {
    await initData();

    dispatch(dataInitialized());
}

export const initializeDataAction = () => initializeData;



/* getDisplayedPosts at Home */
export const DISPLAY_POSTS_AT_HOME_DONE = "BLOG/LOAD_DATA/DISPLAY_POSTS_DONE";
const displayedPostsAtHomeDone = (page) => ({type: DISPLAY_POSTS_AT_HOME_DONE, page: page});



export const displayedPostsMiddleware = storeAPI => next => action => {
    if(action.type === SET_CURRENT_PAGE_AT_HOME) {
        const currentPage = action.page;
        const numItemsPerPage = storeAPI.getState().home.data.numItemsPerPage; 

        loadPosts(currentPage, numItemsPerPage).then(() => {
            storeAPI.dispatch(displayedPostsAtHomeDone(currentPage));
        });
    }

    return next(action);

}