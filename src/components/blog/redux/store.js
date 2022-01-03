import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

import reducer  from "./reducer";
import { authorPageMiddleware, homeMiddleware, singleCategoryMiddleware, singleDateMiddleware, singlePostMiddleware, singleTagMiddleware } from "./loadData";

//const redux_devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, homeMiddleware, 
                                                                singleCategoryMiddleware,
                                                                singleTagMiddleware,
                                                                singleDateMiddleware,
                                                                authorPageMiddleware,
                                                                singlePostMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;