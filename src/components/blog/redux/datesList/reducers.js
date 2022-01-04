import { DatesImageURL } from "../../assets/imageLinks";
import { SET_DATES_LIST_DONE } from "../loadData";
import { SET_DATES_LIST_DATA_READY } from "./actionTypes";

const initState = {
    featureImage: {
        url: DatesImageURL
    },
    data: {
        datesList: [],
        dataReady: false
    }
};

const datesListReducer = (state = initState, action) => {
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