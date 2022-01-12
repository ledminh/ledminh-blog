import { useState } from 'react';
import Modal  from 'react-modal';

Modal.setAppElement("#root");



const dialogStyle = {
    overlay: {
        zIndex: "100001"
    },
    content: {
        margin: "auto",
        width: "85vw",
        height: "85vw",
        maxWidth: "1000px",
        maxHeight: "1000px",
        border: "10px double black",
        borderRadius: "30px"        
    }
}

const useDialog = (DialogContent, contentLabel) => {
    const [dialogIsOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    } 

    const closeDialog = () => {
        setIsOpen(false);
    }


    const Dialog = () => (
        <Modal
                isOpen={dialogIsOpen}
                onRequestClose={closeDialog}
                contentLabel={contentLabel}
                style={dialogStyle}
                >
                    <DialogContent />
        </Modal>
    );

    
    return {Dialog, openDialog, closeDialog};

}

export default useDialog;