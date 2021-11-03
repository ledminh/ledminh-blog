import { combineReducers } from "redux";

import dataReducer from "./data/reducers";
import funcReducer from "./func/reducers";

const homeReducer = combineReducers({
    data:dataReducer,
    func: funcReducer
});


export default homeReducer;