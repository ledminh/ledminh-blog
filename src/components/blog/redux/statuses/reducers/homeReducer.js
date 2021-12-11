import { combineReducers } from "redux";

import { Home } from "../actionTypes";




//Reducers
const showCommentsReducer = (state = false, action) => {
    if(action.type === Home.SHOW_COMMENTS){
        return true;
    }

    if(action.type === Home.HIDE_COMMENTS){
        return false;
    }

    if(action.type === Home.TOGGLE_COMMENTS) {
        return !state;
    }
    
    return state;
}


const showFullPostReducer = (state = false, action) => {
    if(action.type === Home.TOGGLE_FULLPOST){
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
    if(action.type === Home.SET_CURRENT_PAGE){
        return action.page;
    }

    return state;
}

const currentPagiReducer = (state = 1, action) => {
    if(action.type === Home.SET_CURRENT_PAGI) {
        return action.pagi;
    }
    
    return state;
}

const homeReducer = combineReducers({
    showComments: showCommentsReducer,
    showFullPost: showFullPostReducer,
    numItemsPerPage: numItemsPerPageReducer,
    numPagiButtons: numPagiButtonsReducer,
    currentPage: currentPageReducer,
    currentPagi: currentPagiReducer
});


export default homeReducer;

