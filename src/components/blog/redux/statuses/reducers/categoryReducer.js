import { combineReducers } from "redux";

const numItemsPerPageReducer = (state = 4, action) => {
    return state;
}

const numPagiButtonsReducer = (state = 3, action) => {
    return state;
}

const categoryReducer = combineReducers({
    numItemsPerPage: numItemsPerPageReducer,
    numPagiButtons: numPagiButtonsReducer
});



export default categoryReducer;
