import { useActions } from "../../../redux/useActions";

import { showComments as showCommentsHome, hideComments as hideCommentsHome, 
            toggleComments, toggleFullPost, 
            setHomeCurrentPage,
            setHomeCurrentPagi,
            setMainPost } from "./home/actions";

import { setCurrentPagi as setCategoriesListCurrentPagi, setCurrentPage as setCategoriesListCurrentPage } from "./categoriesList/actions";

import { setCurrentSinglePost, showComments as showCommentSinglePost, hideComments as hideCommentSinglePost} from "./singlePost/actions";

import { setCurrentCategory as setSingleCategoryCurrentCategory, setCurrentPage as setSingleCategoryCurrentPage, setCurrentPagi as setSingleCategoryCurrentPagi } from "./singleCategory/actions";
import { setCurrentTag, setCurrentPage as setSingleTagCurrentPage, setCurrentPagi as setSingleTagCurrentPagi } from "./singleTagPage/actions";

import { setFeatureImageURL } from "./featureImage/actions";
import { setCurrentDate, setCurrentPage as setDatePageCurrentPage, setCurrentPagi as setDatePageCurrentPagi } from "./singleDatePage/actions";

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

export const useSingleCategoryActions = () => useActions({setCurrentItem: setSingleCategoryCurrentCategory,
                                                            setCurrentPage: setSingleCategoryCurrentPage,
                                                            setCurrentPagi: setSingleCategoryCurrentPagi                                                            
                                                        });
export const useSingleTagPageActions = () => useActions({setCurrentItem: setCurrentTag,
                                                            setCurrentPage: setSingleTagCurrentPage,
                                                            setCurrentPagi: setSingleTagCurrentPagi                                                            
                                                        });

export const useSingleDatePageActions = () => useActions({ setCurrentItem: setCurrentDate,
                                                            setCurrentPage: setDatePageCurrentPage,
                                                            setCurrentPagi: setDatePageCurrentPagi
                                                        });