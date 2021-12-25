import { useSelector } from "react-redux";

const useHome = () => useSelector(state => state.home);

export default useHome;