import { combineReducers } from "redux";

import dataReducer from "./data/reducers";
import statusesReducer from "./statuses/reducers";

const blogReducer = combineReducers({
   data: dataReducer,
   statuses: statusesReducer
});


export default blogReducer;