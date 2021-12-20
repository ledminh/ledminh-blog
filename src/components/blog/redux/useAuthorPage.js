import { useSelector } from "react-redux";

const useAuthorPage = () => useSelector(state => state.blog.authorPage);

export default useAuthorPage;