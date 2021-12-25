import { useSelector } from "react-redux";

const useSingleDatePage = () => useSelector(state => state.singleDatePage);

export default useSingleDatePage;