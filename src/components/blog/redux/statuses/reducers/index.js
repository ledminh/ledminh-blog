import { combineReducers } from "redux";

import  locationReducer  from "./locationReducer";
import  homeReducer  from "./homeReducer";
import  categoryReducer  from "./categoryReducer";


const statusesReducer = combineReducers({
    location: locationReducer,
    home: homeReducer,
    category: categoryReducer
 });
 
 
 export default statusesReducer;
