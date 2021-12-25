import { useSelector } from "react-redux";

const useFeatureImage = () => useSelector(state => state.featureImage);

export default useFeatureImage;