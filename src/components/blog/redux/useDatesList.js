import { useSelector } from "react-redux";

const useDatesList = () => useSelector(state => state.blog.datesList);

export default useDatesList;