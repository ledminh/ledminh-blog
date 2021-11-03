import { SHOW_COMMENTS, HIDE_COMMENTS, TOGGLE_COMMENTS, TOGGLE_FULLPOST } from "./actionTypes";

//SHOW COMMENTS

export const showComments = () => ({type: SHOW_COMMENTS});
export const hideComments = () => ({type: HIDE_COMMENTS});
export const toggleComments = () => ({type: TOGGLE_COMMENTS});


// SHOW FULL POST
export const toggleFullPost = () => ({type: TOGGLE_FULLPOST});