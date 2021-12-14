import { getTagsList } from "../../../../data";

const initState = {
    tags: getTagsList()

}


const tagsListReducer = (state = initState, action) => {


    return state;
}

export default tagsListReducer;