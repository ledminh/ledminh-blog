import { HIDE_COMMENTS, SET_CURRENT_SINGLE_POST, SHOW_COMMENTS } from "./actionTypes";

// SET CURRENT SINGLE POST
export const setCurrentSinglePost = (slug) => ({type: SET_CURRENT_SINGLE_POST, slug: slug});


//Show/Hide Comments
export const showComments = () => ({type: SHOW_COMMENTS});
export const hideComments = () => ({type: HIDE_COMMENTS});