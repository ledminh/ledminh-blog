import { combineReducers } from "redux";


import featureImageURLReducer from "./featureImageURLReducer";

const statusesReducer = combineReducers({
    featureImageURL: featureImageURLReducer,
    
 });
 
 
 export default statusesReducer;
