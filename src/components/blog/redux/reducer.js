import { combineReducers } from "redux";

import homeReducer from "./home/reducer";


const blogReducer = combineReducers({
   home: homeReducer
});


export default blogReducer;