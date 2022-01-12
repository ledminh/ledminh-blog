import { useReducer } from 'react';
import { projects } from './data';

const initalState = {
    projectsData: projects,
    currentProjectID: ""
}

const SET_CURRENT_PROJECT = "HOME/PROJECTS/SET_CURRENT_PROJECT";

const reducer = (state, action) => {
    if(action.type === SET_CURRENT_PROJECT) {
        return {
            ...state,
            currentProjectID: action.currentProjectID
        }
    }


    return state;
}

const useData = () => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const setCurrentProject = (currProjectID) => dispatch({type:SET_CURRENT_PROJECT, currentProjectID: currProjectID});

    return {
        projectsData: state.projectsData,
        currentProjectID: state.currentProjectID,
        setCurrentProject: setCurrentProject
    }
}

export default useData;