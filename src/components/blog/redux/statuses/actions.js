import { Home, Location } from "./actionTypes";

/****************** 
 * Home Actions
*/

// MainPostArrID
export const setMainPostArrID = (id) => ({type: Home.SET_MAINPOST_ARR_ID, id: id});

//SHOW COMMENTS
export const showComments = () => ({type: Home.SHOW_COMMENTS});
export const hideComments = () => ({type: Home.HIDE_COMMENTS});
export const toggleComments = () => ({type: Home.TOGGLE_COMMENTS});


// SHOW FULL POST
export const toggleFullPost = () => ({type: Home.TOGGLE_FULLPOST});




/****************** 
 * Location Actions
*/
export const setLocation = (l) => ({type: Location.SET_LOCATION, location: l});