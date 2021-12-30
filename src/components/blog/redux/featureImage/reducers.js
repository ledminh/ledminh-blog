import { SET_FEATURE_IMAGE_URL } from "./actionTypes";

const initialState = {
    url: ""
}

const featureImageReducer = (state = initialState, action) => {
    if(action.type === SET_FEATURE_IMAGE_URL) {
        
        return {
            url: action.url
        }
    }
    return state;
}

export default featureImageReducer;