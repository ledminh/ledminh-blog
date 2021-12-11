import { find } from "lodash";
import { getCategories, getPosts } from "../../../../data";
import { HomeData } from "./actionTypes";


const posts = getPosts();
const mainPost = posts[0];

const initialState = {
    categories: getCategories(),
    
    mainPost: posts[0],
    otherPosts: posts.filter((p) => p.id !== mainPost.id)
                    .map(oP => ({
                        id: oP.id,
                        feature_image_url: oP.feature_image_url,
                        title: oP.title,
                        meta_data: {
                            date_created: oP.date_created,
                            author: oP.author
                        }
                    }))
}



const dataReducer = (state = initialState, action) => {
    if(action.type === HomeData.SET_MAIN_POST){
        return {
            ...state,
            mainPost: find(posts, {id: action.id}),
            otherPosts: posts.filter((p) => p.id !== action.id)
                    .map(oP => ({
                        id: oP.id,
                        feature_image_url: oP.feature_image_url,
                        title: oP.title,
                        meta_data: {
                            date_created: oP.date_created,
                            author: oP.author
                        }
                    }))
        }
    }

    return state;
};

export default dataReducer;