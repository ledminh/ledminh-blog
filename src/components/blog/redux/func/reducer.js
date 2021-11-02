import { combineReducers } from "redux";

import showCommentsReducer from "./showComments.reducer";
import showFullPostReducer from "./showFullPost.reducer";

const funcReducer = combineReducers({
    showComments: showCommentsReducer,
    showFullPost: showFullPostReducer
});


export default funcReducer;