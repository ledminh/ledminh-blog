import { posts } from "../../../../../../data";
import { SET_MAINPOST_ARR_ID} from "../actionTypes";

const initialState = {
    mainPostArrID: 0,    
    posts: posts.map((p, i) => ({...p, arrID: i})),        

};



const dataReducer = (state = initialState, action) => {
    if(action.type === SET_MAINPOST_ARR_ID){
        return {
            ...state,
            mainPostArrID: action.id
        }
    }
    


    

    return state;
};




export default dataReducer;