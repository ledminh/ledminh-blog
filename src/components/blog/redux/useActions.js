import { useActions } from "../../../redux/useActions";

import { showComments, hideComments, 
            toggleComments, toggleFullPost, 
            setHomeCurrentPage,
            setHomeCurrentPagi,
            setMainPost } from "./home/actions";

import { setCategoryCurrentPage, setCategoryCurrentPagi, setCurrentCategory } from "./category/actions";

import { setCurrentSinglePost } from "./singlePost/actions";


import { setFeatureImageURL } from "./featureImage/actions";

export const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost,
                                    setMainPost,
                                    setCurrentPage: setHomeCurrentPage,
                                    setCurrentPagi: setHomeCurrentPagi
                                });


export const useCategoryActions = () => useActions({setCurrentPage: setCategoryCurrentPage,
                                                    setCurrentPagi: setCategoryCurrentPagi,
                                                    setCurrentCategory
                                                    });



export const useFeatureImageActions = () => useActions({setFeatureImageURL});

export const useSinglePostActions = () => useActions({setCurrentSinglePost});
