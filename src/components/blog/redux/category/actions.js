import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE, SET_CURRENT_PAGI } from "./actionTypes";

// SET CURRENT PAGE
export const setCategoryCurrentPage = (p) => ({type: SET_CURRENT_PAGE, page: p});

// SET CURRENT PAGI
export const setCategoryCurrentPagi = (p) => ({type: SET_CURRENT_PAGI, pagi: p});

// SET CURRENT CATEGORY
export const setCurrentCategory = (slug) => ({type: SET_CURRENT_CATEGORY, slug: slug});