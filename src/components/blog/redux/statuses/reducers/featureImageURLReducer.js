import { FeatureImageURL } from "../actionTypes";

const featureImageURLReducer = (state = "", action) => {
    if(action.type === FeatureImageURL.SET_FEATURE_IMAGE_URL) {
        return action.url;
    }
    return state;
}

export default featureImageURLReducer;