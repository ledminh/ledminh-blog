import { combineReducers } from "redux";

import homeReducer from "./home/reducers";
import categoriesListReducer from "./categoriesList/reducers";
import singleCategoryReducer from "./singleCategory/reducers";
import featureImageReducer from "./featureImage/reducers";
import singlePostReducer from "./singlePost/reducers";

const blogReducer = combineReducers({
   home: homeReducer,
   categoriesList: categoriesListReducer,
   featureImage: featureImageReducer,
   singlePost: singlePostReducer,
   singleCategory: singleCategoryReducer
});


export default blogReducer;