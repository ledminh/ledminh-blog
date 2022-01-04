import { SET_DATES_LIST, SET_DATES_LIST_DATA_READY } from "./actionTypes";

export const setDatesList = () => ({type: SET_DATES_LIST});

export const setDatesListDataReady = (status) => ({type: SET_DATES_LIST_DATA_READY, status: status});