import { useActions } from "../../../redux/useActions";

import { showComments as showCommentsHome, hideComments as hideCommentsHome, 
            toggleComments, toggleFullPost, 
            setHomeCurrentPage,
            setHomeCurrentPagi,
            setMainPost } from "./home/actions";

import { setCurrentPagi as setCategoriesListCurrentPagi, setCurrentPage as setCategoriesListCurrentPage } from "./categoriesList/actions";

import { setCurrentSinglePost, showComments as showCommentSinglePost, hideComments as hideCommentSinglePost} from "./singlePost/actions";

import { setCurrentCategory as setSingleCategoryCurrentCategory, setCurrentPage as setSingleCategoryCurrentPage, setCurrentPagi as setSingleCategoryCurrentPagi } from "./singleCategory/actions";

import { setFeatureImageURL } from "./featureImage/actions";

export const useHomeActions = () => 
                        useActions({showComments: showCommentsHome, 
                                    hideComments: hideCommentsHome, 
                                    toggleComments, toggleFullPost,
                                    setMainPost,
                                    setCurrentPage: setHomeCurrentPage,
                                    setCurrentPagi: setHomeCurrentPagi
                                });


export const useCategoriesListActions = () => useActions({setCurrentPage: setCategoriesListCurrentPage,
                                                            setCurrentPagi: setCategoriesListCurrentPagi
                                                    });



export const useFeatureImageActions = () => useActions({setFeatureImageURL});

export const useSinglePostActions = () => useActions({setCurrentSinglePost,
                                                        showComments: showCommentSinglePost, 
                                                        hideComments: hideCommentSinglePost});

export const useSingleCategoryActions = () => useActions({setCurrentCategory: setSingleCategoryCurrentCategory,
                                                            setCurrentPage: setSingleCategoryCurrentPage,
                                                            setCurrentPagi: setSingleCategoryCurrentPagi                                                            
                                                        });
