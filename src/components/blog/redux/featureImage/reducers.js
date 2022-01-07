import { DATA_INITIALIZED } from "../loadData";
import { SET_FEATURE_IMAGE_URL } from "./actionTypes";

const initialState = {
    url: ""
}

const featureImageReducer = (state = initialState, action) => {
    if(action.type === DATA_INITIALIZED){
        if(action.status === false)
            return initialState;
    }
    if(action.type === SET_FEATURE_IMAGE_URL) {
        return {
            url: action.url
        }
    }

    if(action.type === DATA_INITIALIZED){
        if(action.status === false){
            return {
                url: ""
            }
        }
    }

    
    return state;
}

export default featureImageReducer;