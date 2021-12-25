import { useSelector } from "react-redux";

const useTagsList = () => useSelector(state => state.tagsList);

export default useTagsList;