import { SET_MAINPOST_ARR_ID, GET_NEXT_BATCH, GET_PREV_BATCH, SET_PAGE_NUMBER, GET_NEXT_PAGI, GET_PREV_PAGI } from "./actionTypes";

export const setMainPostArrID = (id) => ({type: SET_MAINPOST_ARR_ID, id: id});
export const getNextBatch = () => ({type: GET_NEXT_BATCH});
export const getPrevBatch = () => ({type:GET_PREV_BATCH});

export const setPageNumber = (pNum) => ({type:SET_PAGE_NUMBER, pageNum: pNum});

export const getNextPagi = () => ({type: GET_NEXT_PAGI});
export const getPrevPagi = () => ({type: GET_PREV_PAGI});