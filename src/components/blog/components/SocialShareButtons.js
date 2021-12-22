import {FacebookShareButton, TwitterShareButton, RedditShareButton, LinkedinShareButton, EmailShareButton} from 'react-share';

import "../css/SocialShareButtons.css";

const SocialShareButtons = ({url, title, summary, hashtag, webName}) => {
    return (
        <div className="share">
            <ul>
                <li className="share-title"><i className="fas fa-share" /></li>
                <li>                 
                    <FacebookShareButton 
                        url={url}
                        quote={summary}
                        hashtag={hashtag}
                        className="react-share-button"
                        >
                        <i className="fa fa-facebook" />
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton
                        url={url}
                        hashtags={[hashtag.slice(1)]}
                        className="react-share-button"                        
                    >
                        <i className="fa fa-twitter" />
                    </TwitterShareButton>                    
                </li>
                <li>
                    <RedditShareButton
                        url={url}
                        title={title}
                        className="react-share-button"
                    >
                        <i className="fa fa-reddit" />
                    </RedditShareButton>
                </li>
                <li>
                    <LinkedinShareButton
                        url={url}
                        title={title}
                        summary={summary}
                        source={webName}
                        className="react-share-button"
                        >
                        <i className="fa fa-linkedin" />
                    </LinkedinShareButton>
                </li>
                <li>
                    <EmailShareButton
                        url={url}
                        subject={title}
                        body={summary}
                        className="react-share-button"
                        >
                        <i className="far fa-envelope" />
                    </EmailShareButton>
                </li>
            </ul>
        </div>                      
    )
}

export default SocialShareButtons;