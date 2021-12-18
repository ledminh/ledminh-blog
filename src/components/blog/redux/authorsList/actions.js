import {SET_CURRENT_PAGE, SET_CURRENT_PAGI } from "./actionTypes";

// SET CURRENT PAGE
export const setCurrentPage = (p) => ({type: SET_CURRENT_PAGE, page: p});

// SET CURRENT PAGI
export const setCurrentPagi = (p) => ({type: SET_CURRENT_PAGI, pagi: p});
