import { useLocation } from 'react-router-dom';
import {FacebookShareButton} from 'react-share';

import "../css/SocialShareButtons.css";

const SocialShareButtons = () => {
    const location = useLocation();
    const currentURL = "https://www.ledminh.dev" + location.pathname;
    return (
        <div className="share">
            <ul>
                <li className="share-title"><i className="fas fa-share" /></li>
                <li>                 
                    <FacebookShareButton 
                        url={currentURL}
                        quote={"CampersTribe - World is yours to explore"}
                        hashtag="#camperstribe"
                        className="react-share-button"
                        >
                        <i className="fa fa-facebook" />
                    </FacebookShareButton>
                </li>
                <li><i className="fa fa-twitter" /></li>
                <li><i className="fa fa-google" /></li>
                <li><i className="fa fa-instagram" /></li>
                <li><i className="fa fa-youtube" /></li>
            </ul>
        </div>                      
    )
}

export default SocialShareButtons;