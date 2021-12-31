import { DatesImageURL } from "../../assets/imageLinks";
import { getDatesList } from "../../data";
import { DATA_INITIALIZED } from "../loadData";

const initState = {
    featureImage: {
        url: DatesImageURL
    },
    data: []
};

const datesListReducer = (state = initState, action) => {
    if(action.type === DATA_INITIALIZED) {
        return {
            ...state,
            data: getDatesList()
        }
    }
    return state;
}

export default datesListReducer;