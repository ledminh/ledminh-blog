import { combineReducers } from "redux";


import showCommentsReducer from "./showComments";
import showFullPostReducer from "./showFullPost";

const funcReducer = combineReducers({
    showComments: showCommentsReducer,
    showFullPost: showFullPostReducer
});


export default funcReducer;