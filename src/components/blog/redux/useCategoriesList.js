import { useSelector } from "react-redux";

const useCategoriesList = () => useSelector(state => state.categoriesList);

export default useCategoriesList;