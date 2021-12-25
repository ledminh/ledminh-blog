import { useSelector } from "react-redux";

const useSingleCategory = () => useSelector(state => state.singleCategory);

export default useSingleCategory;