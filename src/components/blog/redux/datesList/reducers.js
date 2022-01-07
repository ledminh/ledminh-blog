import { DatesImageURL } from "../../assets/imageLinks";
import { DATA_INITIALIZED, DATA_INITIALIZED_ERROR, SET_DATES_LIST_DONE } from "../loadData";
import { SET_DATES_LIST_DATA_READY } from "./actionTypes";

const initState = {
    featureImage: {
        url: DatesImageURL
    },
    data: {
        datesList: [],
        dataReady: false
    },
    error: {
        status: false,
        name: "",
        message: ""
    }
};

const datesListReducer = (state = initState, action) => {
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

    if(action.type === DATA_INITIALIZED){
        if(action.status === false){
            return initState;
        }
        
    }

    if(action.type === SET_DATES_LIST_DATA_READY){
        return {
            ...state,
            data: {
                ...state.data,
                dataReady: action.status
            }
        }
    }

    if(action.type === SET_DATES_LIST_DONE) {
        return {
            ...state,
            data: {
                datesList: action.datesList,
                dataReady: true
            }
        }
    }



    return state;
}

export default datesListReducer;