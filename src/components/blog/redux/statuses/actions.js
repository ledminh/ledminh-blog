import { Category, FeatureImageURL, Home, Location } from "./actionTypes";

/**************************** 
 * Home Actions
*****************************/

// MainPostArrID
export const setMainPostArrID = (id) => ({type: Home.SET_MAINPOST_ARR_ID, id: id});

//SHOW COMMENTS
export const showComments = () => ({type: Home.SHOW_COMMENTS});
export const hideComments = () => ({type: Home.HIDE_COMMENTS});
export const toggleComments = () => ({type: Home.TOGGLE_COMMENTS});


// SHOW FULL POST
export const toggleFullPost = () => ({type: Home.TOGGLE_FULLPOST});

// SET CURRENT PAGE
export const setHomeCurrentPage = (p, nItems) => ({type: Home.SET_CURRENT_PAGE, page: p, numItemsPerPage: nItems});


// SET CURRENT PAGI
export const setHomeCurrentPagi = (p) => ({type: Home.SET_CURRENT_PAGI, pagi: p});





/**************************** 
 * Category Actions
*****************************/

// SET CURRENT PAGE
export const setCategoryCurrentPage = (p) => ({type: Category.SET_CURRENT_PAGE, page: p});



// SET CURRENT PAGI
export const setCategoryCurrentPagi = (p) => ({type: Category.SET_CURRENT_PAGI, pagi: p});






/**************************** 
 * Location Actions
*****************************/
export const setLocation = (l) => ({type: Location.SET_LOCATION, location: l});





/**************************** 
 * Feature Image Actions
*****************************/
export const setFeatureImageURL = (url) => ({type: FeatureImageURL.SET_FEATURE_IMAGE_URL, url: url});
