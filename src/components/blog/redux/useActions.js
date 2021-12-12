import { useActions } from "../../../redux/useActions";

import { showComments, hideComments, 
            toggleComments, toggleFullPost, 
            setHomeCurrentPage,
            setHomeCurrentPagi,
            setMainPost } from "./home/actions";

import { setCategoryCurrentPage, setCategoryCurrentPagi } from "./category/actions";


import { setFeatureImageURL } from "./statuses/actions";

export const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost,
                                    setMainPost,
                                    setCurrentPage: setHomeCurrentPage,
                                    setCurrentPagi: setHomeCurrentPagi
                                });


export const useCategoryActions = () => useActions({setCurrentPage: setCategoryCurrentPage,
                                                    setCurrentPagi: setCategoryCurrentPagi
                                                    });



export const useFeatureImageURL = () => useActions({setFeatureImageURL});
