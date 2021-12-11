import { getCategories, getMainPost, getOtherPosts } from "../../../../data";
import { HomeData } from "./actionTypes";

const initialState = {
    categories: getCategories(),    
    mainPost: getMainPost(),
    otherPosts: getOtherPosts()
}



const dataReducer = (state = initialState, action) => {
    if(action.type === HomeData.SET_MAIN_POST){
        return {
            ...state,
            mainPost: getMainPost(action.id),
            otherPosts: getOtherPosts(action.id)
        }
    }

    return state;
};

export default dataReducer;