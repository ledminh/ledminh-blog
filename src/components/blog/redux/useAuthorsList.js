import { useSelector } from "react-redux";

const useCategoriesList = () => useSelector(state => state.blog.authorsList);

export default useCategoriesList;