import { combineReducers } from "redux";

import homeReducer from "./home/reducer";
import categoryReducer from "./category/reducer";
import {locationReducer} from "./location/reducer";

const blogReducer = combineReducers({
   home: homeReducer,
   category: categoryReducer,
   location: locationReducer
});


export default blogReducer;