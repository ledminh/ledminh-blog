import { useSelector } from "react-redux";

const useHomeStatus = () => useSelector(state => state.blog.home.func);

export default useHomeStatus;

