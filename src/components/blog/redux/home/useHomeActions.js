import { useActions } from "../../../../redux/useActions";

import { showComments, hideComments, toggleComments, toggleFullPost} from "./func/actions";
import { setMainPostArrID, getNextBatch, getPrevBatch, setPageNumber, getNextPagi, getPrevPagi} from "./data/actions";


const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost,
                                    setMainPostArrID, getNextBatch, 
                                    getPrevBatch, setPageNumber,
                                    getNextPagi, getPrevPagi});


export default useHomeActions;