import { SET_CURRENT_PAGE, SET_CURRENT_PAGI, SET_CURRENT_CATEGORY, SET_SINGLE_CATEGORY_DATA_READY } from "./actionTypes";

// SET CURRENT CATEGORY
export const setCurrentCategory = (slug) => ({type: SET_CURRENT_CATEGORY, slug: slug});

// SET CURRENT CATEGORY PAGE
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});

// SET CURRENT CATEGORY PAGI
export const setCurrentPagi = (pagi) => ({type: SET_CURRENT_PAGI, pagi: pagi});

// SET SINGLE CATEGORY DATA READY
export const setSingleCategoryDataReady = (status) => ({type: SET_SINGLE_CATEGORY_DATA_READY, status: status});