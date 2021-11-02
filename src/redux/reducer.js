import { combineReducers } from "redux";

import blogReducer from "../components/blog/redux/reducer";



const reducer = combineReducers({
    blog: blogReducer
});


export default reducer;