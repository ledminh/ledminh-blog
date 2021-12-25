import { useSelector } from "react-redux";

const useSinglePost = () => useSelector(state => state.singlePost);

export default useSinglePost;