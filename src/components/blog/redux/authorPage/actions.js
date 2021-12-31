import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_CURRENT_AUTHOR, SET_AUTHOR_PAGE_DATA_READY } from "./actionTypes";

// SET CURRENT CATEGORY
export const setCurrentAuthor = (slug) => ({type: SET_CURRENT_AUTHOR, slug: slug});

// SET CURRENT CATEGORY PAGE
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});

// SET CURRENT CATEGORY PAGI
export const setCurrentPagi = (pagi) => ({type: SET_CURRENT_PAGI, pagi: pagi});

// SET AUTHOR PAGE DATA READY
export const setAuthorPageDataReady = (status) => ({type: SET_AUTHOR_PAGE_DATA_READY, status: status});