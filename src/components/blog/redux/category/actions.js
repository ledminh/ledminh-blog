import { SET_CURRENT_PAGE, SET_CURRENT_PAGI } from "./actionTypes";

// SET CURRENT PAGE
export const setCategoryCurrentPage = (p) => ({type: SET_CURRENT_PAGE, page: p});

// SET CURRENT PAGI
export const setCategoryCurrentPagi = (p) => ({type: SET_CURRENT_PAGI, pagi: p});