import { combineReducers } from "redux";

import homeReducer from "./home/reducer";
import {locationReducer} from "./location/reducer";

const blogReducer = combineReducers({
   home: homeReducer,
   location: locationReducer
});


export default blogReducer;