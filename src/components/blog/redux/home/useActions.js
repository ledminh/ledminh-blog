import { useActions } from "../../../../redux/useActions";
import { showComments, hideComments, toggleComments, toggleFullPost} from "./func/actions";


const useHomeActions = () => 
                        useActions({showComments, hideComments, 
                                    toggleComments, toggleFullPost});


export default useHomeActions;