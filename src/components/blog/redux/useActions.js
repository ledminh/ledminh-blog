import { useActions } from "../../../redux/useActions";

import { showComments, hideComments, 
            toggleComments, toggleFullPost, 
            setHomeCurrentPage,
            setHomeCurrentPagi,
            setMainPost } from "./home/actions";

import { setCategoryCurrentPage, setCategoryCurrentPagi } from "./statuses/actions";

import { setLocation } from "./statuses/actions";

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


export const useBlogLocation = () => useActions({setLocation});

export const useFeatureImageURL = () => useActions({setFeatureImageURL});
