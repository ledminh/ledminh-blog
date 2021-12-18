import { combineReducers } from "redux";

import homeReducer from "./home/reducers";
import categoriesListReducer from "./categoriesList/reducers";
import singleCategoryReducer from "./singleCategory/reducers";
import featureImageReducer from "./featureImage/reducers";
import singlePostReducer from "./singlePost/reducers";
import tagsListReducer from "./tagsList/reducers";
import singleTagPageReducer from "./singleTagPage/reducers";
import datesListReducer from "./datesList/reducers";
import singleDatePageReducer from "./singleDatePage/reducers";

const blogReducer = combineReducers({
   home: homeReducer,
   categoriesList: categoriesListReducer,
   tagsList: tagsListReducer,
   singleTagPage: singleTagPageReducer,
   featureImage: featureImageReducer,
   singlePost: singlePostReducer,
   singleCategory: singleCategoryReducer,
   datesList: datesListReducer,
   singleDatePage: singleDatePageReducer
});


export default blogReducer;