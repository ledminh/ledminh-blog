import { AuthorListsImageURL } from "../../assets/imageLinks";
import { getAuthorsList } from "../../data";
import { DATA_INITIALIZED } from "../loadData";

const initState = {
    featureImage: {
        url: AuthorListsImageURL
    },
    data: []
}

const authorsListReducer = (state = initState, action) => {
    if(action.type === DATA_INITIALIZED){
        if(action.status === false){
            return initState;
        }

        return {
            ...state,
            data: getAuthorsList()
        }
    }
    return state;
}

export default authorsListReducer;

