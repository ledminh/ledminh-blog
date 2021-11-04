import { useSelector } from "react-redux";

const useBlogLocationData = () => useSelector(state => state.blog.location);

export default useBlogLocationData;