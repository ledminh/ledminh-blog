import { posts } from "../../../../../../data";
import { SET_MAINPOST_ARR_ID, GET_NEXT_BATCH, GET_PREV_BATCH } from "../actionTypes";

const initialState = {
    mainPostArrID: 0,
    beginArrID: 0,
    endArrID: 4,
    posts: posts.map((p, i) => ({...p, arrID: i})),
    pagination: ["1", "2", "3", "..."],
    currentPageID: 0,
    numPosts: 50
};



const dataReducer = (state = initialState, action) => {
    if(action.type === SET_MAINPOST_ARR_ID){
        return {
            ...state,
            mainPostArrID: action.id
        }
    }

    if(action.type === GET_NEXT_BATCH){
        return {
            ...state,
            beginArrID: state.endArrID,
            endArrID: state.endArrID + 4
        }
    }

    if(action.type === GET_PREV_BATCH){
        return {
            ...state,
            endArrID: state.beginArrID,
            beginArrID: state.beginArrID - 4            
        }
    }

    return state;
};




export default dataReducer;