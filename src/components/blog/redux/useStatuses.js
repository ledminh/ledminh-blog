import { useSelector } from "react-redux";

const useStatuses = () => useSelector(state => state.blog.statuses);

export default useStatuses;