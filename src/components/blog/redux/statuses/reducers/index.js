import { combineReducers } from "redux";

import  locationReducer  from "./locationReducer";
import  homeReducer  from "./homeReducer";
import  categoryReducer  from "./categoryReducer";
import featureImageURLReducer from "./featureImageURLReducer";

const statusesReducer = combineReducers({
    featureImageURL: featureImageURLReducer,
    location: locationReducer,
    home: homeReducer,
    category: categoryReducer
 });
 
 
 export default statusesReducer;
