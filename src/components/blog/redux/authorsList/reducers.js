import { AuthorListsImageURL } from "../../assets/imageLinks";
import { getAuthorsList } from "../../data";
import { DATA_INITIALIZED, DATA_INITIALIZED_ERROR } from "../loadData";

const initState = {
    featureImage: {
        url: AuthorListsImageURL
    },
    data: [],
    error: {
        status: false,
        name: "",
        message: ""
    }
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

export default authorsListReducer;

