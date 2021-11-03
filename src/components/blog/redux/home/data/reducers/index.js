import { combineReducers } from "redux";

const reducer = (state = {}) => state;

const dataReducer = combineReducers({
    sample: reducer
});


export default dataReducer;