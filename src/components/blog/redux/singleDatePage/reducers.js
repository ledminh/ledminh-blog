import { SET_CURRENT_DATE, SET_CURRENT_PAGE, SET_CURRENT_PAGI } from "./actionTypes";
import { getPostsOnDate } from "../../../../data";

const initState = {
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
    featureImage: {
        url: "https://www.saratogian.com/wp-content/uploads/2021/11/calendar.jpg"
    } 
};

const singleDatePageReducer = (state = initState, action) => {
    if(action.type === SET_CURRENT_DATE){
        return {
            ...state,
            ...getPostsOnDate(action.slug, state.numItemsPerPage, 1),
            currentPage: 1,        
            currentPagi: 1
        }
    }

    if(action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.page,
            ...getPostsOnDate(state.idInfo.slug, state.numItemsPerPage, action.page)
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


export default singleDatePageReducer;