import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_SINGLE_CATEGORY_DATA_READY } from "./actionTypes";
import { getCategory } from "../../data";
import { SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE, SET_CURRENT_CATEGORY_DONE } from "../loadData";

const initialState = {
    dataReady: false,
    title: "",
    numItemsPerPage: 5,
    currentPage: 1,
    numPagiButtons: 3,
    currentPagi: 1,
    posts: {
        totalPosts: 0,
        displayedPosts: [],
        endPrev:false, 
        endNext: false, 
    },
    featureImage: {
        url: ""
    }
}

const singleCategoryReducer = (state = initialState, action) => {
    if(action.type === SET_SINGLE_CATEGORY_DATA_READY){
        return {
            ...state,
            dataReady: action.status
        };
    }
    
    if(action.type === SET_CURRENT_CATEGORY_DONE) {
        

        return {
            ...state,
            currentPage: 1,
            currentPagi: 1,
            ...action.cat,
            dataReady: true
        };

        
    }

    if(action.type === SET_CURRENT_CATEGORY_CURRENT_PAGE_DONE) {
        return {
            ...state,
            ...action.cat
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