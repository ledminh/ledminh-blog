import { useSelector } from "react-redux";

const useCategory = () => useSelector(state => state.blog.category);

export default useCategory;