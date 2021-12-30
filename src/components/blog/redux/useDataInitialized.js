import { useSelector } from "react-redux";

const useDataInitialized = () => useSelector(state => state.dataInitialized);

export default useDataInitialized;