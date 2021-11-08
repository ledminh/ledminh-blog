import Title from './Title';
import SubTitle from './SubTitle';
import MetaData from './MetaData';
import ExcerptFullPostToggle from './ExcerptFullPostToggle';
import ButtonsPanel from './ButtonPanel';

import Comments  from './Comments';


import EntriesList from './EntriesList';
import Pagination from './Pagination';

import useHomeStatus from '../redux/home/useHomeStatus';
import useHomeActions from '../redux/home/useHomeActions';
import useHomeData from '../redux/home/useHomeData';

import { useEffect } from 'react';
import { HOME, useBlogLocation } from '../redux/location/reducer';





const Home = () => {
  
    const status = useHomeStatus();
    const actions = useHomeActions();
    const data = useHomeData();
    const location = useBlogLocation();

    useEffect(() => location.setLocation(HOME), [location]);

    const onClickHandleMakerOtherPosts = (id) => {
        return () => {    
            actions.setMainPostArrID(id);
        }   
    }
    
    const mainPost = data.posts[data.mainPostArrID];
    const otherPosts = data.posts.slice(data.otherPostIDs[data.beginOtherPostID], data.otherPostIDs[data.endOtherPostID] + 1)
                                    .filter((d) => d.id !== mainPost.id)
                                    .map(oP => ({
                                                id: oP.arrID,
                                                feature_image_url: oP.feature_image_url,
                                                title: oP.title,
                                                meta_data: {
                                                    date_created: oP.date_created,
                                                    author: oP.author
                                                }
                                            }));
    
    return (
        otherPosts ?
            (
            <>
                <Title title={mainPost.title} />
                <SubTitle>
                    <MetaData
                        showComments={actions.showComments}
                        categories={mainPost.categories}
                        tags= {mainPost.tags}
                        date_created= {mainPost.date_created}
                        comments={mainPost.comments}
                        author={mainPost.author}
                        />
                </SubTitle>
                
                <ExcerptFullPostToggle
                    showFullPostStatus={status.showFullPost}
                    excerpt={mainPost.excerpt}
                    content={mainPost.content}
                    />
                <ButtonsPanel
                    toggleComments={actions.toggleComments}
                    toggleFullPost={actions.toggleFullPost}
                    showFullPostStatus={status.showFullPost}
                    showCommentsStatus={status.showComments}
                    />

                <Comments
                    hideComments={actions.hideComments}
                    showCommentsStatus={status.showComments} 
                    comments={mainPost.comments}
                    />

                <div className="separator" />

                <EntriesList 
                    entries={otherPosts} 
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    />
                
                <Pagination 
                    nextOnClick={actions.getNextBatch}
                    prevOnClick={actions.getPrevBatch}
                    paginationArr={data.pagination}
                    setPageNumber={actions.setPageNumber}
                    getNextPagi={actions.getNextPagi}
                    getPrevPagi={actions.getPrevPagi}
                    />
            </>
            ):
            (<span>Loading ... </span>)
    );
}

export default Home;
