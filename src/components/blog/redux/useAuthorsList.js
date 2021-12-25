import { useSelector } from "react-redux";

const useCategoriesList = () => useSelector(state => state.authorsList);

export default useCategoriesList;