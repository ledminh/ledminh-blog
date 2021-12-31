import { AuthorPageImageURL } from "../../assets/imageLinks";
import { SET_AUTHOR_PAGE_CURRENT_PAGE_DONE, SET_CURRENT_AUTHOR_DONE } from "../loadData";
import { SET_CURRENT_PAGI, SET_AUTHOR_PAGE_DATA_READY} from "./actionTypes";


const initState = {
    dataReady: false,
    name: "",
    slogan: "",
    featureImage: {
        url: AuthorPageImageURL
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
    if(action.type === SET_AUTHOR_PAGE_DATA_READY) {
        return {
            ...state,
            dataReady: action.status
        }
    }

    if(action.type === SET_CURRENT_AUTHOR_DONE) {

        return {
            ...state,
            ...action.author,
            currentPage: 1,        
            currentPagi: 1,
            dataReady: true
        };
    }

    if(action.type === SET_AUTHOR_PAGE_CURRENT_PAGE_DONE) {
        return {
            ...state,
            ...action.author
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