import { useActions } from "../../../../redux/useActions";

export const HOME = "BLOG/LOCATION/HOME";
export const CATEGORIES = "BLOG/LOCATION/CATEGORIES";


// action type
const SET_LOCATION = "BLOG/LOCATION/SET_LOCATION";

//Initial State
const initialState = HOME;

//actions
const setLocation = (l) => ({type: SET_LOCATION, location: l});

export const useBlogLocation = () =>
                        useActions({setLocation});

                        
// 

//reducer
export const locationReducer = (state = initialState, action) => {
    if(action.type === SET_LOCATION) {
        return action.location;
    }
    return state;
}

