import { combineReducers } from "redux";

import {getCategories} from "../../../../data";

import { SET_CURRENT_PAGE, SET_CURRENT_PAGI } from "./actionTypes";

const dataInitialState = {
    categories: getCategories()
}



const dataReducer = (state = dataInitialState, action) => {
    
    return state;
};



const numItemsPerPageReducer = (state = 4, action) => {
    return state;
}

const numPagiButtonsReducer = (state = 3, action) => {
    return state;
}

const currentPageReducer = (state = 1, action) => {
    if(action.type === SET_CURRENT_PAGE){
        return action.page;
    }

    return state;
}

const currentPagiReducer = (state = 1, action) => {
    if(action.type === SET_CURRENT_PAGI) {
        return action.pagi;
    }
    
    return state;
}

const categoryReducer = combineReducers({
    data: dataReducer,
    numItemsPerPage: numItemsPerPageReducer,
    numPagiButtons: numPagiButtonsReducer,
    currentPage: currentPageReducer,
    currentPagi: currentPagiReducer
});



export default categoryReducer;