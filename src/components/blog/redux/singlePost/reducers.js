import { combineReducers } from "redux";
import { REFRESH_COMMENTS } from "../Comments";
import { SET_SINGLE_POST_DONE } from "../loadData";
import { SHOW_COMMENTS, HIDE_COMMENTS, SINGLE_POST_DATA_READY } from "./actionTypes";

const initState = {
    data: {},
    dataReady: false
}


const postReducer = (state = initState, action) => {
    if(action.type === SINGLE_POST_DATA_READY) {
        return {
            ...state,
            dataReady: action.status
        };
    }


    if(action.type === SET_SINGLE_POST_DONE){
        return {
            data: action.post,
            dataReady: true
        };
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