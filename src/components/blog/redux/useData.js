import { useSelector } from "react-redux";

const useData = () => useSelector(state => state.blog.data);

export default useData;