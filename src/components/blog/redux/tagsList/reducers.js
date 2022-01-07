import { TagsImageURL } from "../../assets/imageLinks";
import { getTagsList } from "../../data";
import { DATA_INITIALIZED, DATA_INITIALIZED_ERROR } from "../loadData";

const initState = {
    tags: [],
    featureImage: {
        url: TagsImageURL
    },

    error: {
        status: false,
        name: "",
        message: ""
    }
    

}


const tagsListReducer = (state = initState, action) => {
    if(action.type === DATA_INITIALIZED){
        if(action.status === false){
            return initState;
        }

        return {
            ...state,
            tags: getTagsList()
        }
    }

    if(action.type === DATA_INITIALIZED_ERROR){       
        
        return {
            ...state,
            error: {
                status: true,
                name: "Data Initialized Error",
                message: "Invalid data source"
            }
        };

    }

    return state;
}

export default tagsListReducer;