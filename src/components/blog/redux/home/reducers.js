import { combineReducers } from "redux";

import { getMainPost, getOtherPosts } from "../../../../data";
import { SHOW_COMMENTS, HIDE_COMMENTS, TOGGLE_COMMENTS, 
            TOGGLE_FULLPOST, SET_CURRENT_PAGE, SET_CURRENT_PAGI,
            SET_MAIN_POST} from "./actionTypes";



const dataInitialState = {
    mainPost: getMainPost(),
    otherPosts: getOtherPosts()
}



const dataReducer = (state = dataInitialState, action) => {
    if(action.type === SET_MAIN_POST){
        return {
            ...state,
            mainPost: getMainPost(action.id), //action.id is mainPost's ID, it's used to get the main post (obviously)
            otherPosts: getOtherPosts(action.id) // action.id is mainPost's ID, it's used to filter the main post out
        }
    }

    if(action.type === SET_CURRENT_PAGE) {
        console.log(action);
        return {
            ...state,
            // TO-DO: somehow change otherPosts to displayedPost
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

const numItemsPerPageReducer = (state = 4, action) => {
    return state;
}

const numPagiButtonsReducer = (state = 3, action) => {
    return state;
}

const currentPageReducer = (state = 1, action) => {
    if(action.type === SET_CURRENT_PAGE){
        return action.page;
    }

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
    numItemsPerPage: numItemsPerPageReducer,
    numPagiButtons: numPagiButtonsReducer,
    currentPage: currentPageReducer,
    currentPagi: currentPagiReducer
});


export default homeReducer;

