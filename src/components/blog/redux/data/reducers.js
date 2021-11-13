import { posts, categories } from "../../../../data";

const initialState = {
    posts: posts.map((p, i) => ({...p, arrID: i})),
    categories: categories     
}

const dataReducer = (state = initialState, action) => {


    return state;
};

export default dataReducer;