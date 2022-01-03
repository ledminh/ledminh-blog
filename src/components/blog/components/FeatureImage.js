import '../css/FeatureImage.css';

const FeatureImage = ({ feature_image_url, altText }) => (
    (feature_image_url === "")?
        (<Loading />)
        :    
        (<img src={feature_image_url} 
                className="feature-image" 
                alt={altText} />)
);


export default FeatureImage;


const Loading = () => (
    <div className='feature-image-loading'>
        <div className="text">
            <span className="L">L</span>
            <span className="O">O</span>
            <span className="A">A</span>
            <span className="D">D</span>
            <span className="I">I</span>
            <span className="N">N</span>
            <span className="G">G</span>
            <span className="space"> </span>
            <span className="dot-1">.</span>
            <span className="dot-2">.</span>
            <span className="dot-3">.</span>
             
        </div> 
    </div>
);