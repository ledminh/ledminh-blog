import { combineReducers } from "redux";
import { SET_CURRENT_SINGLE_POST } from "./actionTypes";

const postReducer = (state = {}, action) => {
    if(action.type === SET_CURRENT_SINGLE_POST){
        console.log(action);
        return state;
    }


    return state;
}


const singlePostReducer = combineReducers({
    post: postReducer
});

export default singlePostReducer;