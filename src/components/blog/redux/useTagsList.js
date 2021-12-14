import { useSelector } from "react-redux";

const useTagsList = () => useSelector(state => state.blog.tagsList);

export default useTagsList;