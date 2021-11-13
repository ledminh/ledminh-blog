import { combineReducers } from "redux";

import { Category } from "../actionTypes";

const numItemsPerPageReducer = (state = 4, action) => {
    return state;
}

const numPagiButtonsReducer = (state = 3, action) => {
    return state;
}

const currentPageReducer = (state = 1, action) => {
    if(action.type === Category.SET_CURRENT_PAGE){
        return action.page;
    }

    return state;
}

const currentPagiReducer = (state = 1, action) => {
    if(action.type === Category.SET_CURRENT_PAGI) {
        return action.pagi;
    }
    
    return state;
}

const categoryReducer = combineReducers({
    numItemsPerPage: numItemsPerPageReducer,
    numPagiButtons: numPagiButtonsReducer,
    currentPage: currentPageReducer,
    currentPagi: currentPagiReducer
});



export default categoryReducer;
