import { SHOW_COMMENTS, HIDE_COMMENTS, TOGGLE_COMMENTS, 
    TOGGLE_FULLPOST, SET_CURRENT_PAGE, SET_CURRENT_PAGI,
    SET_MAIN_POST} from "./actionTypes";


//SHOW COMMENTS
export const showComments = () => ({type: SHOW_COMMENTS});
export const hideComments = () => ({type: HIDE_COMMENTS});
export const toggleComments = () => ({type: TOGGLE_COMMENTS});


// SHOW FULL POST
export const toggleFullPost = () => ({type: TOGGLE_FULLPOST});

// SET CURRENT PAGE
export const setHomeCurrentPage = (p, nItems) => ({type: SET_CURRENT_PAGE, page: p, numItemsPerPage: nItems});


// SET CURRENT PAGI
export const setHomeCurrentPagi = (p) => ({type: SET_CURRENT_PAGI, pagi: p});


// SET MAIN POST
export const setMainPost = (id) => ({type: SET_MAIN_POST, id: id});
