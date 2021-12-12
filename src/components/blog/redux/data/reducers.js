import { getCategories } from "../../../../data";

const initialState = {
    categories: getCategories()
}



const dataReducer = (state = initialState, action) => {
    

    return state;
};

export default dataReducer;