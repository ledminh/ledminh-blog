import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_CURRENT_CATEGORY } from "./actionTypes";
import { getCategory } from "../../../../data";

const initialState = {
    numItemsPerPage: 5,
    currentPage: 1,
    numPagiButtons: 3,
    currentPagi: 1,
    posts: {
        displayedPosts: [], 
        endPrev:false, 
        endNext: false
    }
}

const singleCategoryReducer = (state = initialState, action) => {
    if(action.type === SET_CURRENT_CATEGORY) {
        
        return {
            ...state,
            ...getCategory(action.slug, state.numItemsPerPage, state.currentPage),        
            currentPagi: 1
        };
    }

    if(action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.page,
            ...getCategory(state.slug, state.numItemsPerPage, action.page)
        };
    }

    if(action.type === SET_CURRENT_PAGI){
        return {
            ...state,
            currentPagi: action.pagi
        }

    }
    return state;

}

export default singleCategoryReducer;