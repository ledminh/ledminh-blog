import { combineReducers } from "redux";

import homeReducer from "./home/reducers";
import categoryReducer from "./category/reducers";
import statusesReducer from "./statuses/reducers";

const blogReducer = combineReducers({
   home: homeReducer,
   category: categoryReducer,
   statuses: statusesReducer
});


export default blogReducer;