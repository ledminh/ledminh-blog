import { TagsImageURL } from "../../assets/imageLinks";
import { getTagsList } from "../../data";
import { DATA_INITIALIZED } from "../loadData";

const initState = {
    tags: [],
    featureImage: {
        url: TagsImageURL
    }
    
    

}


const tagsListReducer = (state = initState, action) => {
    if(action.type === DATA_INITIALIZED){
        return {
            ...state,
            tags: getTagsList()
        }
    }

    return state;
}

export default tagsListReducer;