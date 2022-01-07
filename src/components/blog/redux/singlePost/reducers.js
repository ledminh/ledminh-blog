import { combineReducers } from "redux";
import { REFRESH_COMMENTS } from "../Comments";
import { RESET_ERROR } from "../error";
import { DATA_INITIALIZED, SET_SINGLE_POST_DONE } from "../loadData";
import { SHOW_COMMENTS, HIDE_COMMENTS, SINGLE_POST_DATA_READY } from "./actionTypes";

const initState = {
    data: {},
    dataReady: false,
    error: {
        status: false,
        name: "",
        message: ""
    }
    
}


const postReducer = (state = initState, action) => {
    if(action.type === DATA_INITIALIZED) {
        if(action.status === false){
            return initState;
        }
    }

    if(action.type === SINGLE_POST_DATA_READY) {
        return {
            ...state,
            dataReady: action.status
        };
    }

    if(action.type === RESET_ERROR) {
        return {
            ...state,
            error: {
                status: false,
                name: "",
                message: ""
            }
        }
    }

    if(action.type === SET_SINGLE_POST_DONE){
        if(action.error){
            

            return {
                ...state,
                error: {
                    status: true,
                    name: action.error.name,
                    message: action.error.message
                },
                dataReady: false
                
            };
        }

        return {
            ...state,
            data: action.post,
            dataReady: true,
            
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