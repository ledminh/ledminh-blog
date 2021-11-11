import { useActions } from "../../../../redux/useActions";

import { showComments, hideComments, toggleComments, toggleFullPost} from "./func/actions";
import { setMainPostArrID} from "./data/actions";


const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost,
                                    setMainPostArrID});


export default useHomeActions;