import { useSelector } from "react-redux";

const useSinglePost = () => useSelector(state => state.blog.singlePost);

export default useSinglePost;