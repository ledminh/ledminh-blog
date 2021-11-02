import { combineReducers } from "redux";
import funcReducer from "./func/reducer";


const blogReducer = combineReducers({
    func: funcReducer
});


export default blogReducer;