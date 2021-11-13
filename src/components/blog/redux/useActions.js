import { useActions } from "../../../redux/useActions";

import { showComments, hideComments, 
            toggleComments, toggleFullPost, 
            setMainPostArrID, setHomeCurrentPage,
            setHomeCurrentPagi } from "./statuses/actions";

import { setCategoryCurrentPage, setCategoryCurrentPagi } from "./statuses/actions";

import { setLocation } from "./statuses/actions";


export const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost,
                                    setMainPostArrID, 
                                    setCurrentPage: setHomeCurrentPage,
                                    setCurrentPagi: setHomeCurrentPagi
                                });


export const useCategoryActions = () => useActions({setCurrentPage: setCategoryCurrentPage,
                                                    setCurrentPagi: setCategoryCurrentPagi
                                                    });


export const useBlogLocation = () => useActions({setLocation});

