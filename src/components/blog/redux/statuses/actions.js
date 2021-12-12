import { FeatureImageURL} from "./actionTypes";






/**************************** 
 * Feature Image Actions
*****************************/
export const setFeatureImageURL = (url) => ({type: FeatureImageURL.SET_FEATURE_IMAGE_URL, url: url});
