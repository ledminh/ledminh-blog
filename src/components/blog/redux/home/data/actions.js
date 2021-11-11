import { SET_CURRENT_PAGE, SET_MAINPOST_ARR_ID } from "./actionTypes";

export const setMainPostArrID = (id) => ({type: SET_MAINPOST_ARR_ID, id: id});


export const setPageNumber = (pNum) => ({type:SET_CURRENT_PAGE, currentPageNumber: pNum});

