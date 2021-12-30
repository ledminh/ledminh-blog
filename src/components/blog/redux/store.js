import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

import reducer  from "./reducer";
import { homeMiddleware, singleCategoryMiddleware, singleTagMiddleware } from "./loadData";

//const redux_devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, homeMiddleware, 
                                                                singleCategoryMiddleware,
                                                                singleTagMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;