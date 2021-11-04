import { SET_MAINPOST_ARR_ID, GET_NEXT_BATCH, GET_PREV_BATCH } from "./actionTypes";

export const setMainPostArrID = (id) => ({type: SET_MAINPOST_ARR_ID, id: id});
export const getNextBatch = () => ({type: GET_NEXT_BATCH});
export const getPrevBatch = () => ({type:GET_PREV_BATCH});
