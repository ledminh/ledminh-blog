import { useSelector } from "react-redux";

const useHome = () => useSelector(state => state.blog.home);

export default useHome;