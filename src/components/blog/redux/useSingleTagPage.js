import { useSelector } from "react-redux";

const useSingleTagPage = () => useSelector(state => state.blog.singleTagPage);

export default useSingleTagPage;