import { SHOW_COMMENTS, HIDE_COMMENTS, TOGGLE_COMMENTS } from "../actionTypes";

const initState = false;


const showCommentsReducer = (state = initState, action) => {
    if(action.type === SHOW_COMMENTS){
        return true;
    }

    if(action.type === HIDE_COMMENTS){
        return false;
    }

    if(action.type === TOGGLE_COMMENTS) {
        return !state;
    }
    
    return state;
}

export default showCommentsReducer;