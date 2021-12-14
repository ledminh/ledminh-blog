import { useActions } from "../../../redux/useActions";

import { showComments as showCommentsHome, hideComments as hideCommentsHome, 
            toggleComments, toggleFullPost, 
            setHomeCurrentPage,
            setHomeCurrentPagi,
            setMainPost } from "./home/actions";

import { setCategoryCurrentPage, setCategoryCurrentPagi, setCurrentCategory } from "./category/actions";

import { setCurrentSinglePost, showComments as showCommentSinglePost, hideComments as hideCommentSinglePost} from "./singlePost/actions";


import { setFeatureImageURL } from "./featureImage/actions";

export const useHomeActions = () => 
                        useActions({showComments: showCommentsHome, 
                                    hideComments: hideCommentsHome, 
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

export const useSinglePostActions = () => useActions({setCurrentSinglePost,
                                                        showComments: showCommentSinglePost, 
                                                        hideComments: hideCommentSinglePost});
