import { useSelector } from "react-redux";

const useSingleCategory = () => useSelector(state => state.blog.singleCategory);

export default useSingleCategory;