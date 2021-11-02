import '../css/FeatureImage.css';

const FeatureImage = ({ feature_image_url, altText }) => (
    <img src={feature_image_url} 
            className="feature-image" 
            alt={altText} />
);


export default FeatureImage;