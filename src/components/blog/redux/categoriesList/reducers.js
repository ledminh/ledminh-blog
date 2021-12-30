import { combineReducers } from "redux";

import {getDisplayedCategories, getNumCategories} from "../../data";

import { SET_CURRENT_PAGE, SET_CURRENT_PAGI } from "./actionTypes";
import { DATA_INITIALIZED } from "../loadData";
import { CategoryImageURL } from "../../../../assets/imageLinks";

/********************
 * DATA REDUCER
 */


const currentPageInit = 1;
const numItemsPerPageInit = 4;

const dataInitialState = {
    numCategories: -1,
    displayedCategories: [],
    endPrev: false,
    endNext: false,
    numItemsPerPage: numItemsPerPageInit,
    currentPage: currentPageInit
    
}

const dataReducer = (state = dataInitialState, action) => {
    if(action.type === DATA_INITIALIZED) {
        const [displayedEntries, endPrev, endNext] = getDisplayedCategories(numItemsPerPageInit, currentPageInit);

        return {
            numCategories: getNumCategories(),
            displayedCategories: displayedEntries,
            endPrev: endPrev,
            endNext: endNext,
            numItemsPerPage: numItemsPerPageInit,
            currentPage: currentPageInit
            
        }
    }
    
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

const featureImageInitState = {
    url: CategoryImageURL
}

const featureImageReducer = (state = featureImageInitState, action) => {
    return state;
}

const categoriesListReducer = combineReducers({
    data: dataReducer,
    numPagiButtons: numPagiButtonsReducer,
    currentPagi: currentPagiReducer,
    featureImage: featureImageReducer
});



export default categoriesListReducer;