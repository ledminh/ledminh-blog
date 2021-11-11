import { useSelector } from "react-redux";

const useCategoryData = () => useSelector(state => state.blog.category.data);

export default useCategoryData;