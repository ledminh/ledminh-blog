import { useActions } from "../../../redux/useActions";

import { showComments, hideComments, 
            toggleComments, toggleFullPost, 
            setMainPostArrID } from "./statuses/actions";

import { setLocation } from "./statuses/actions";


export const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost,
                                    setMainPostArrID});

export const useBlogLocation = () => useActions({setLocation});

