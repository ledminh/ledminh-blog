import { useSelector } from "react-redux";

const useHomeData = () => useSelector(state => state.blog.home.data);

export default useHomeData;