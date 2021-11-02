import { createStore } from "redux";
import reducer  from "./reducer";

const redux_devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, redux_devtool);

export default store;