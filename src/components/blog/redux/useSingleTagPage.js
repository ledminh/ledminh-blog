import { useSelector } from "react-redux";

const useSingleTagPage = () => useSelector(state => state.singleTagPage);

export default useSingleTagPage;