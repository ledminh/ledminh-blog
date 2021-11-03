import { TOGGLE_FULLPOST } from "../actionTypes";

const initState = false;

const showFullPostReducer = (state = initState, action) => {
    if(action.type === TOGGLE_FULLPOST){
        return !state;
    }

    
    return state;
}

export default showFullPostReducer;