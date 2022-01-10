import { useReducer } from 'react';

const initalState = {
    dialogData: {
        bottom: 0,
        left: 0,
        description: "",
        img: "",
        showed: false
    },
    activeSkill: ""
}

const SET_DIALOG_DATA = "HOME/SKILLS/SET_DIALOG_DATA";
const SHOW_DIALOG = "HOME/SKILLS/SHOW_DIALOG";
const HIDE_DIALOG = "HOME/SKILLS/HIDE_DIALOG";
const SET_ACTIVE_SKILL = "HOME/SKILLS/SET_ACTIVE_SKILL";
const CLEAR_ACTIVE_SKILL = "HOME/SKILL/CLEAR_ACTIVE_SKILL";

const reducer = (state, action) => {
    if(action.type === SET_DIALOG_DATA) {

        return {
            ...state,
            dialogData: {
                bottom: action.bottom,
                left: action.left,
                description: action.description,
                img: action.img,
                showed: false
            }
        }
    }

    if(action.type === SHOW_DIALOG){

        return {
            ...state,
            dialogData: {
                ...state.dialogData,
                showed: true
            }
        }
    }

    if(action.type === HIDE_DIALOG){

        return {
            ...state,
            dialogData: {
                ...state.dialogData,
                showed: false
            }
        }
    }

    if(action.type === SET_ACTIVE_SKILL) {
        return {
            ...state,
            activeSkill: action.activeSkill
        }
    }

    if(action.type === CLEAR_ACTIVE_SKILL) {
        return {
            ...state,
            activeSkill: ""
        }
    }

    return state;
}

const useData = () => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const setDialogData = (bottom, left, description, img) => dispatch({type: SET_DIALOG_DATA, 
                                                                            bottom: bottom,
                                                                            left: left,
                                                                            description: description,
                                                                            img: img
                                                                        });
    
    const showDialog = () => dispatch({type: SHOW_DIALOG});
    const hideDialog = () => dispatch({type: HIDE_DIALOG});
    const setActiveSkill = (skill) => dispatch({type: SET_ACTIVE_SKILL, activeSkill: skill});
    const clearActiveSkill = () => dispatch({type: CLEAR_ACTIVE_SKILL});

    return {
        state,
        setDialogData,
        showDialog,
        hideDialog,
        setActiveSkill,
        clearActiveSkill
    }
}

export default useData;