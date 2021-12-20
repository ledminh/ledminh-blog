import { getAuthor } from "../../../../data";
import {SET_CURRENT_AUTHOR, SET_CURRENT_PAGE, SET_CURRENT_PAGI} from "./actionTypes";


const initState = {
    name: "",
    slogan: "",
    featureImage: {
        url: "https://collegeinfogeek.com/wp-content/uploads/2020/05/writing-apps-featured-document-on-computer.jpg"
    },
    posts: {
        totalPosts: 0,
        displayedPosts: [],
        endPrev: false,
        endNext: false
    },
    currentPage: 1,
    currentPagi: 1,
    numItemsPerPage: 5,
    numPagiButtons: 3
};

export const authorPageReducer = (state = initState, action) => {
    if(action.type === SET_CURRENT_AUTHOR) {
        
        return {
            ...state,
            ...getAuthor(action.slug, state.numItemsPerPage, 1),
            currentPage: 1,        
            currentPagi: 1
        };
    }

    if(action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.page,
            ...getAuthor(state.idInfo.slug, state.numItemsPerPage, action.page)
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

export default authorPageReducer;