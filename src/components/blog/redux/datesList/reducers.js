import { DatesImageURL } from "../../assets/imageLinks";
import { getDatesList } from "../../data";
import { DATA_INITIALIZED, DISPLAY_POSTS_AT_HOME_DONE } from "../loadData";

const initState = {
    featureImage: {
        url: DatesImageURL
    },
    data: []
};

const datesListReducer = (state = initState, action) => {
    if(action.type === DATA_INITIALIZED ||
        action.type === DISPLAY_POSTS_AT_HOME_DONE) {
        return {
            ...state,
            data: getDatesList()
        }
    }


    return state;
}

export default datesListReducer;