import { range } from "lodash";
import { posts } from "../../../../../../data";
import { SET_MAINPOST_ARR_ID, GET_NEXT_BATCH, GET_PREV_BATCH, SET_PAGE_NUMBER, GET_NEXT_PAGI, GET_PREV_PAGI } from "../actionTypes";

const initialState = {
    mainPostArrID: 0,
    
    beginOtherPostID: 0,
    endOtherPostID: 3,
    posts: posts.map((p, i) => ({...p, arrID: i})),
    otherPostIDs: [...posts.keys()].filter(i => i !== 0),
    endPrev: true,
    endNext: false,
    
    pagination: range(1, 4),
    endPrevPagi: true,
    endNextPagi: false,
    
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

    if(action.type === GET_PREV_BATCH){
        if(state.endPrev) return state;
        
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

    if(action.type === SET_PAGE_NUMBER) {
        let newEndID = action.pageNum*4 - 1,
            newBeginID = newEndID - 3,
            newEndNext = false,
            newEndPrev = false;

        if(newEndID >= state.otherPostIDs.length){
            newEndID = state.otherPostIDs.length - 1;
            newEndNext = true;
        }

        if(newBeginID ===0) newEndPrev = true;

        return {
            ...state,
            beginOtherPostID: newBeginID,
            endOtherPostID: newEndID,
            endNext: newEndNext,
            endPrev: newEndPrev
        }
    }

    if(action.type === GET_NEXT_PAGI){
        if(state.endNextPagi) return state;


        let newStart = state.pagination[2] + 1,
            newEnd = newStart + 2,
            newEndNextPagi = false,
            newEndPrevPagi = false;
        
            const endPagiID = Math.ceil(state.otherPostIDs.length/4);

        if(newEnd === endPagiID) newEndNextPagi = true;

        if(newEnd > endPagiID){
            newEnd = endPagiID;
            newStart = newEnd - 2;

            newEndNextPagi = true;
        }
        
        return {
            ...state,
            pagination: range(newStart, newEnd + 1),
            endNextPagi: newEndNextPagi,
            endPrevPagi: newEndPrevPagi
        }
        
    }

    if(action.type === GET_PREV_PAGI){
        if(state.endPrevPagi) return state;

        let newEnd = state.pagination[0] - 1,
            newStart = newEnd - 2,
            newEndNextPagi = false,
            newEndPrevPagi = false;

        if(newStart === 1) newEndPrevPagi = true;

        if(newStart < 1){
            newStart = 1;
            newEnd = newStart + 2;
            newEndPrevPagi = true;
        }


        return {
            ...state,
            pagination: range(newStart, newEnd + 1),
            endNextPagi: newEndNextPagi,
            endPrevPagi: newEndPrevPagi
        
        }
        
    }

    return state;
};




export default dataReducer;