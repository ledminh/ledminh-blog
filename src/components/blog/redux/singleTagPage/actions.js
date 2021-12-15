import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_CURRENT_TAG } from "./actionTypes";

// SET CURRENT TAG
export const setCurrentTag = (name) => ({type: SET_CURRENT_TAG, name: name});

// SET CURRENT PAGE
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});

// SET CURRENT PAGI
export const setCurrentPagi = (pagi) => ({type: SET_CURRENT_PAGI, pagi: pagi});