import { combineReducers } from "redux";

import {getDisplayedCategories, getNumCategories, getCategory} from "../../../../data";

import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_CURRENT_CATEGORY } from "./actionTypes";

const currentPageInit = 1;
const numItemsPerPageInit = 4;

const [displayedEntries, endPrev, endNext] = getDisplayedCategories(numItemsPerPageInit, currentPageInit);

const dataInitialState = {
    numCategories: getNumCategories(),
    displayedCategories: displayedEntries,
    endPrev: endPrev,
    endNext: endNext,
    numItemsPerPage: 4,
    currentPage: currentPageInit,
    currentCategory: {}
    
}

const dataReducer = (state = dataInitialState, action) => {
    if(action.type === SET_CURRENT_PAGE) {
        const [displayedEntries, endPrev, endNext] = getDisplayedCategories(state.numItemsPerPage, action.page);

        return {
            ...state,
            displayedCategories: displayedEntries,
            endPrev: endPrev,
            endNext: endNext,
            currentPage: action.page
        }


    }

    if(action.type === SET_CURRENT_CATEGORY) {
        
        const currentCategory = getCategory(action.slug);
        return {
            ...state,
            currentCategory: currentCategory
        }
    }
    return state;
};




const numPagiButtonsReducer = (state = 3, action) => {
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
    numPagiButtons: numPagiButtonsReducer,
    currentPagi: currentPagiReducer
});



export default categoryReducer;