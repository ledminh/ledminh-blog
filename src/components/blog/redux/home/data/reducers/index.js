import { posts } from "../../../../../../data";
import { SET_MAINPOST_ARR_ID, GET_NEXT_BATCH, GET_PREV_BATCH } from "../actionTypes";

const initialState = {
    mainPostArrID: 0,
    beginOtherPostID: 0,
    endOtherPostID: 3,
    posts: posts.map((p, i) => ({...p, arrID: i})),
    otherPostIDs: [...posts.keys()].filter(i => i !== 0),
    endPrev: true,
    endNext: false,
    pagination: ["1", "2", "3", "..."],
    currentPageID: 0,
    numPosts: 50
};



const dataReducer = (state = initialState, action) => {
    if(action.type === SET_MAINPOST_ARR_ID){


        return {
            ...state,
            mainPostArrID: action.id,
            otherPostIDs: [...state.posts.keys()].filter(i => i !== action.id)
        }
    }

    if(action.type === GET_NEXT_BATCH){     
        if(state.endNext) return state;
        else {
            const newBeginID = state.endOtherPostID + 1;    
            let newEndID = state.endOtherPostID + 4;
            let newEndNext = false;

            if(newEndID >= state.otherPostIDs.length){
                newEndID = state.otherPostIDs.length - 1;
                newEndNext = true;
            }
            
            return {
                ...state,
                beginOtherPostID: newBeginID,
                endOtherPostID: newEndID,
                endNext: newEndNext,
                endPrev: false
            }
        }    
    
    }

    if(action.type === GET_PREV_BATCH){
        if(state.endPrev) return state;
        else {
            let newEndID = state.beginOtherPostID - 1,
                newBeginID = state.beginOtherPostID - 4,
                newEndPrev = false;

            if(newEndID < 4 || newBeginID < 0){
                newEndID = 3;
                newBeginID = 0;
                newEndPrev = true;
            }
            return {
                ...state,
                endOtherPostID: newEndID,
                beginOtherPostID: newBeginID,
                endNext: false,
                endPrev: newEndPrev            
            }
        }

    }

    return state;
};




export default dataReducer;