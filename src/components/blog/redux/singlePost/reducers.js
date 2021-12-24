import { combineReducers } from "redux";
import { getSinglePost } from "../../data";
import { REFRESH_COMMENTS } from "../Comments";
import { SET_CURRENT_SINGLE_POST, SHOW_COMMENTS, HIDE_COMMENTS } from "./actionTypes";




const postReducer = (state = {}, action) => {
    if(action.type === SET_CURRENT_SINGLE_POST){
        return getSinglePost(action.slug);
    }

    if(action.type === REFRESH_COMMENTS) {
        
        return state;

    }

    return state;
}

const showCommentsReducer = (state = false, action) => {
    if(action.type === SHOW_COMMENTS){
        return true;
    }

    if(action.type === HIDE_COMMENTS){
        return false;
    }

    
    return state;
}


const singlePostReducer = combineReducers({
    post: postReducer,
    showCommentsStatus: showCommentsReducer

});

export default singlePostReducer;