import {find, remove} from 'lodash';

import {posts as fetchedPosts} from '../../../data';


import Title from './Title';
import SubTitle from './SubTitle';
import MetaData from './MetaData';
import ExcerptFullPostToggle from './ExcerptFullPostToggle';
import ButtonsPanel from './ButtonPanel';

import Comments  from './Comments';

//import OtherPosts from './OtherPosts';

import EntriesList from './EntriesList';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';

const postIndexes = [0,1,2,3,4];


const Home = ({setFeatureImageURL}) => {

    const [mainPost, setMainPost] = useState(null);
    const [otherPosts, setOtherPosts] = useState(null);
    const [showFullPost, setShowFullPost] = useState(false);
    const [showComments, setShowComments] = useState(false);  

    useEffect(() => {
        const [mP, ...oPs] = fetchedPosts;
        
        setMainPost(mP);
        setFeatureImageURL(mP.feature_image_url);
        
        setOtherPosts(oPs.map(oP => ({
            id: oP.id,
            feature_image_url: oP.feature_image_url,
            title: oP.title,
            meta_data: {
                date_created: oP.date_created,
                author: oP.author
            }
        })));

        return () => {
            setMainPost(null);
            setOtherPosts(null);
        }
    }, []);


    const onClickHandleMakerOtherPosts = (id) => {
        

        return () => {
            
            setMainPost(find(fetchedPosts, {id: id}));
            setFeatureImageURL(mainPost.feature_image_url);

            let oPs = [...fetchedPosts];
            remove(oPs, {id:id});

            setOtherPosts(oPs.map(oP => ({
                id: oP.id,
                feature_image_url: oP.feature_image_url,
                title: oP.title,
                meta_data: {
                    date_created: oP.date_created,
                    author: oP.author
                }
            })));
        }
    }
  

    return (
        otherPosts ?
            (
            <>
                <Title title={mainPost.title} />
                <SubTitle>
                    <MetaData 
                        categories={mainPost.categories}
                        tags= {mainPost.tags}
                        date_created= {mainPost.date_created}
                        comments={mainPost.comments}
                        setShowComments={setShowComments}
                        author={mainPost.author}
                        />
                </SubTitle>
                <ExcerptFullPostToggle 
                    showFullPost={showFullPost} 
                    excerpt={mainPost.excerpt}
                    content={mainPost.content}
                    />
                <ButtonsPanel
                    showFullPost={showFullPost}
                    setShowFullPost={setShowFullPost}                    
                    setShowComments={setShowComments}
                    showComments={showComments}                                                        
                    />                
                <Comments 
                    showComments={showComments} 
                    setShowComments={setShowComments}
                    comments={mainPost.comments}
                    />

                <div className="separator" />

                <EntriesList 
                    entries={otherPosts} 
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    />
                
                <Pagination />
            </>
            ):
            (<span>Loading ... </span>)
    );
}

export default Home;

/*
<OtherPosts 
                postIndexes={postIndexes}
                mainPostIndex={mainPostIndex}
                posts={posts}
                setMainPostIndex={setMainPostIndex}                        
                />
*/