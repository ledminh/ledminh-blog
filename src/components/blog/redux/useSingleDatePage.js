import { useSelector } from "react-redux";

const useSingleDatePage = () => useSelector(state => state.blog.singleDatePage);

export default useSingleDatePage;