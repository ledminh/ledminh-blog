import { useSelector } from "react-redux";

const useCategoriesList = () => useSelector(state => state.blog.categoriesList);

export default useCategoriesList;