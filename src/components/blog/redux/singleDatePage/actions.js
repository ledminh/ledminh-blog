import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_CURRENT_DATE } from "./actionTypes";

// SET CURRENT DATE
export const setCurrentDate = (slug) => ({type: SET_CURRENT_DATE, slug: slug});

// SET CURRENT CATEGORY PAGE
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});

// SET CURRENT CATEGORY PAGI
export const setCurrentPagi = (pagi) => ({type: SET_CURRENT_PAGI, pagi: pagi});