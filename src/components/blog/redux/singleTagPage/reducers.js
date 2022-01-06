import {  SET_CURRENT_PAGI, SET_SINGLE_TAG_DATA_READY } from "./actionTypes";

import { TagsImageURL } from "../../assets/imageLinks";
import { DATA_INITIALIZED, SET_CURRENT_TAG_CURRENT_PAGE_DONE, SET_CURRENT_TAG_DONE } from "../loadData";
import { RESET_ERROR } from "../error";

const initialState = {
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
    featureImage : {
        url: TagsImageURL
    },
    error: {
        status: false,
        name: "",
        message: ""
    }

}

const singleTagPageReducer = (state = initialState, action) => {
    if(action.type === DATA_INITIALIZED) {
        if(action.status === false){
            return {
                ...state,
                dataReady: false
            }
        }
    }

    if(action.type === SET_SINGLE_TAG_DATA_READY) {
        return {
            ...state,
            dataReady: action.status
        }
    }

    if(action.type === RESET_ERROR){

        return {
            ...state,
            error: {
                status: false,
                name: "",
                message: ""
            }
        }
    }
    
    if(action.type ===  SET_CURRENT_TAG_DONE) {
        if(action.error) {
            return {
                ...state,
                error: {
                    status: true,
                    name: action.error.name,
                    message: action.error.message
                },
                dataReady: true
            }
        }

        return {
            ...state,
            ...action.tag,
            currentPage: 1,
            currentPagi: 1,
            dataReady: true
        };
    }

    if(action.type === SET_CURRENT_TAG_CURRENT_PAGE_DONE) {
        return {
            ...state,
            ...action.tag
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