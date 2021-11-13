import { Location } from "../actionTypes";

export const LocationConstants = Object.freeze({
    HOME: "BLOG/LOCATION/HOME",
    CATEGORIES: "BLOG/LOCATION/CATEGORIES"
});


//Initial State
const initialState = LocationConstants.HOME;


//reducer
const locationReducer = (state = initialState, action) => {
    if(action.type === Location.SET_LOCATION) {
        return action.location;
    }
    return state;
}

export default locationReducer;