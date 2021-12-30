import { DatesImageURL } from "../../assets/imageLinks";
import { getDatesList } from "../../data";

const initState = {
    featureImage: {
        url: DatesImageURL
    },
    data: getDatesList()
};

const datesListReducer = (state = initState, action) => {

    return state;
}

export default datesListReducer;