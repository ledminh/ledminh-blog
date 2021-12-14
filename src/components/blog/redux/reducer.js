import { combineReducers } from "redux";

import homeReducer from "./home/reducers";
import categoryReducer from "./category/reducers";
import featureImageReducer from "./featureImage/reducers";
import singlePostReducer from "./singlePost/reducers";

const blogReducer = combineReducers({
   home: homeReducer,
   category: categoryReducer,
   featureImage: featureImageReducer,
   singlePost: singlePostReducer
});


export default blogReducer;