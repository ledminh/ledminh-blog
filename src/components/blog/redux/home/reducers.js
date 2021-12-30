import { combineReducers } from "redux";

import { getDisplayedPosts, getMainPost, getNumPosts } from "../../data";
import { REFRESH_COMMENTS } from "../Comments";
import { SHOW_COMMENTS, HIDE_COMMENTS, TOGGLE_COMMENTS, 
            TOGGLE_FULLPOST, SET_CURRENT_PAGI,
            SET_MAIN_POST} from "./actionTypes";

import { DATA_INITIALIZED, DISPLAY_POSTS_AT_HOME_DONE } from "../loadData";

const currentPageInit = 1;
const numItemsPerPageInit = 4;



const dataInitialState = {
    mainPost: {id: "-1",
                feature_image_url: "",
                categories: [],
                tags: [],
                date_created: "",
                comments: [],
                author: {}
            },
    numPosts: -1,
    displayedPosts: [],
    endPrev: false,
    endNext: false,
    numItemsPerPage: numItemsPerPageInit,
    currentPage: currentPageInit
}

const dataReducer =  (state = dataInitialState, action) => {
    if(action.type === DATA_INITIALIZED){
        const mainPost = getMainPost();

        const [displayedEntries, endPrev, endNext] =  getDisplayedPosts(mainPost.id, numItemsPerPageInit, currentPageInit);
        
        return {
            ...state,
            mainPost: mainPost,
            numPosts: getNumPosts(),
            displayedPosts: displayedEntries,
            endPrev: endPrev,
            endNext: endNext,
            numItemsPerPage: numItemsPerPageInit,
            currentPage: currentPageInit
        }
    }

    if(action.type === SET_MAIN_POST){
        const [displayedEntries, endPrev, endNext] = getDisplayedPosts(action.id, state.numItemsPerPage, state.currentPage);
        
        return {
            ...state,
            mainPost: getMainPost(action.id), //action.id is mainPost's ID, it's used to get the main post (obviously)
            displayedPosts: displayedEntries,
            endPrev: endPrev,
            endNext: endNext,            
        }
    }

    if(action.type === REFRESH_COMMENTS){
        const [displayedEntries, endPrev, endNext] = getDisplayedPosts(state.mainPost.id, state.numItemsPerPage, state.currentPage);
        
        return {
            ...state,
            mainPost: getMainPost(state.mainPost.id), //action.id is mainPost's ID, it's used to get the main post (obviously)
            displayedPosts: displayedEntries,
            endPrev: endPrev,
            endNext: endNext,            
        }
    }

    if(action.type === DISPLAY_POSTS_AT_HOME_DONE) {
        const [displayedEntries, endPrev, endNext] =  getDisplayedPosts(state.mainPost.id, state.numItemsPerPage, action.page);
        
        return {
            ...state,
            displayedPosts: displayedEntries,
            endPrev: endPrev,
            endNext: endNext,
            currentPage: action.page
        }
    }


    return state;
};



const showCommentsReducer = (state = false, action) => {
    if(action.type === SHOW_COMMENTS){
        return true;
    }

    if(action.type === HIDE_COMMENTS){
        return false;
    }

    if(action.type === TOGGLE_COMMENTS) {
        return !state;
    }
    
    return state;
}


const showFullPostReducer = (state = false, action) => {
    if(action.type === TOGGLE_FULLPOST){
        return !state;
    }

    
    return state;
}


const numPagiButtonsReducer = (state = 3, action) => {
    return state;
}


const currentPagiReducer = (state = 1, action) => {
    if(action.type === SET_CURRENT_PAGI) {
        return action.pagi;
    }
    
    return state;
}



const homeReducer = combineReducers({
    data: dataReducer,
    showComments: showCommentsReducer,
    showFullPost: showFullPostReducer,
    numPagiButtons: numPagiButtonsReducer,
    currentPagi: currentPagiReducer
});


export default homeReducer;

