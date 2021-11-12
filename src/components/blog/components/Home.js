import MainPost from "./MainPost";

import EntriesList from './EntriesList';

import useHomeActions from '../redux/home/useHomeActions';
import useHomeData from '../redux/home/useHomeData';

import { useEffect, useState } from 'react';
import { HOME, useBlogLocation } from '../redux/location/reducer';



const Home = () => {

    const actions = useHomeActions();
    const data = useHomeData();
    const location = useBlogLocation();

    useEffect(() => location.setLocation(HOME), [location]);

    const onClickHandleMakerOtherPosts = (id) => {
        return () => {    
            actions.setMainPostArrID(id);
        }   
    }   

    const otherPosts = data.posts.filter((p, i) => i !== data.mainPostArrID)
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
                <MainPost />             

                <div className="separator" />

                <EntriesList 
                    entries={otherPosts} 
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    numItemsPerPage={4}
                    numPagiButtons={3}
                    />
                
                
            </>
            ):
            (<span>Loading ... </span>)
    );
}

export default Home;


