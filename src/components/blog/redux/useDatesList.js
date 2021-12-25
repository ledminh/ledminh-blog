import { useSelector } from "react-redux";

const useDatesList = () => useSelector(state => state.datesList);

export default useDatesList;