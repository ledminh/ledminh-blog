import {  SET_CURRENT_PAGI, SET_SINGLE_DATE_DATA_READY } from "./actionTypes";

import { SET_CURRENT_DATE_CURRENT_PAGE_DONE, SET_CURRENT_DATE_DONE } from "../loadData";

const initState = {
    dataReady: false,
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
    if(action.type === SET_SINGLE_DATE_DATA_READY){
        return {
            ...state,
            dataReady: action.status
        };
    }

    if(action.type === SET_CURRENT_DATE_DONE){
        return {
            ...state,
            ...action.date,
            currentPage: 1,        
            currentPagi: 1,
            dataReady: true
        }
    }

    if(action.type === SET_CURRENT_DATE_CURRENT_PAGE_DONE) {
        return {
            ...state,
            ...action.date
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