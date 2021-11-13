import { combineReducers } from "redux";

import { Home } from "../actionTypes";




//Reducers
const mainPostArrIDReducer = (state = 0, action) => {
    if(action.type === Home.SET_MAINPOST_ARR_ID){
        return action.id
    }

    return state;
}


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

const homeReducer = combineReducers({
    mainPostArrID: mainPostArrIDReducer,
    showComments: showCommentsReducer,
    showFullPost: showFullPostReducer
});


export default homeReducer;

