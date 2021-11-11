import MainPost from "./MainPost";

import EntriesList from './EntriesList';
import Pagination from './Pagination';

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

    const [currentPage, setCurrentPage, otherPosts, endPrev, endNext]  = useOtherPosts(data.posts, data.mainPostArrID);
    
    return (
        otherPosts ?
            (
            <>
                <MainPost />             

                <div className="separator" />

                <EntriesList 
                    entries={otherPosts} 
                    onClickHandleMaker={onClickHandleMakerOtherPosts}
                    />
                
                <Pagination
                    numItemsTotal={data.posts.length -1}
                    numItemsPerPage={4}
                    numButtons={3}
                    nextOnClick={() =>setCurrentPage(currentPage + 1)}
                    prevOnClick={() =>setCurrentPage(currentPage - 1)}
                    endPrev={endPrev}
                    endNext={endNext}
                    setPageNumber={setCurrentPage}
                    currentPage={currentPage}
                    
                    />
            </>
            ):
            (<span>Loading ... </span>)
    );
}

export default Home;


const useOtherPosts = (posts, mainPostArrID) => {
    const [currentPage, setCurrentPage] = useState(1);
    const numItemsPerPage = 4;


    const prevPage = currentPage - 1;
            
    let beginID = prevPage*numItemsPerPage,
        endID = currentPage*numItemsPerPage;
    

    const endPrev = beginID === 0;
    const endNext = endID >= posts.length - 1;

    const otherPosts = posts.filter((p, i) => i !== mainPostArrID)
                                .slice(beginID, endID)
                                .map(oP => ({
                                            id: oP.arrID,
                                            feature_image_url: oP.feature_image_url,
                                            title: oP.title,
                                            meta_data: {
                                                date_created: oP.date_created,
                                                author: oP.author
                                            }
                                        }));

    return [currentPage, setCurrentPage, otherPosts, endPrev, endNext];
}