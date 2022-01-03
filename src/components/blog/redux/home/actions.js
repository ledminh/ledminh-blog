import { SHOW_COMMENTS, HIDE_COMMENTS, TOGGLE_COMMENTS, 
    TOGGLE_FULLPOST, SET_CURRENT_PAGE, SET_CURRENT_PAGI,
    SET_MAIN_POST, SET_HOME_DATA_READY
    } from "./actionTypes";


//SHOW COMMENTS
export const showComments = () => ({type: SHOW_COMMENTS});
export const hideComments = () => ({type: HIDE_COMMENTS});
export const toggleComments = () => ({type: TOGGLE_COMMENTS});


// SHOW FULL POST
export const toggleFullPost = () => ({type: TOGGLE_FULLPOST});

// SET CURRENT PAGE
export const setHomeCurrentPage = (p) => ({type: SET_CURRENT_PAGE, page: p});


// SET CURRENT PAGI
export const setHomeCurrentPagi = (p) => ({type: SET_CURRENT_PAGI, pagi: p});


// SET MAIN POST
export const setMainPost = (id) => ({type: SET_MAIN_POST, id: id});


// SET DATA READY
export const setHomeDataReady = (status) => ({type: SET_HOME_DATA_READY, status: status});


