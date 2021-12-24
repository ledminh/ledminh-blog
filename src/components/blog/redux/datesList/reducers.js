import { getDatesList } from "../../data";

const initState = {
    featureImage: {
        url: "https://www.saratogian.com/wp-content/uploads/2021/11/calendar.jpg"
    },
    data: getDatesList()
};

const datesListReducer = (state = initState, action) => {

    return state;
}

export default datesListReducer;