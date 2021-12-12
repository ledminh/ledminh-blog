import { useSelector } from "react-redux";

const useFeatureImage = () => useSelector(state => state.blog.featureImage);

export default useFeatureImage;