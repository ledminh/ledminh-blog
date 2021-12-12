import { combineReducers } from "redux";

import dataReducer from "./data/reducers";
import homeReducer from "./home/reducers";
import statusesReducer from "./statuses/reducers";

const blogReducer = combineReducers({
   home: homeReducer,
   data: dataReducer,
   statuses: statusesReducer
});


export default blogReducer;