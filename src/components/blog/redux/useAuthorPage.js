import { useSelector } from "react-redux";

const useAuthorPage = () => useSelector(state => state.authorPage);

export default useAuthorPage;