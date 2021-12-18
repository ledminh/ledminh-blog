import { getAuthorsList } from "../../../../data";

const initState = {
    featureImage: {
        url: "https://s26162.pcdn.co/wp-content/uploads/2018/02/writing-group.jpg"
    },
    data: getAuthorsList()
}

const authorsListReducer = (state = initState, actions) => {

    return state;
}

export default authorsListReducer;

