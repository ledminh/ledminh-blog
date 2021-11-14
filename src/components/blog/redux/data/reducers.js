import { find } from "lodash";
import { posts, categories } from "../../../../data";

const getCatFromID = (catID) => {
    const category = find(categories, {id: catID});

    return category.title;
}


const initialState = {
    posts: posts.map((p, i) => ({...p, arrID: i, categories: p.categoryIDs.map((catID => getCatFromID(catID)))})),
    categories: categories     
}


const dataReducer = (state = initialState, action) => {


    return state;
};

export default dataReducer;