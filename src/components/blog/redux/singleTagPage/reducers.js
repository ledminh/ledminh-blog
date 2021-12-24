import { SET_CURRENT_TAG, SET_CURRENT_PAGI, SET_CURRENT_PAGE } from "./actionTypes";
import { getTag } from "../../data";

const initialState = {
    name: "",
    numItemsPerPage: 5,
    currentPage: 1,
    numPagiButtons: 3,
    currentPagi: 1,
    posts: {
        totalPosts: 0,
        displayedPosts: [], 
        endPrev:false, 
        endNext: false
    },
    featureImage : {
        url: "https://cdn5.vectorstock.com/i/1000x1000/28/19/set-blank-vintage-frames-gift-tags-labels-vector-13982819.jpg" 
    }
}

const singleTagPageReducer = (state = initialState, action) => {
    if(action.type === SET_CURRENT_TAG) {
        return {
            ...state,
            ...getTag(action.name, state.numItemsPerPage, 1),
            currentPage: 1,        
            currentPagi: 1
        };
    }

    if(action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.page,
            ...getTag(state.name, state.numItemsPerPage, action.page)
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

export default singleTagPageReducer;