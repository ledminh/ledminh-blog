import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";





const TagsList = () => {
    
    const {data} = useTagsList();
    const {tags} = data;

    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL("https://cdn5.vectorstock.com/i/1000x1000/28/19/set-blank-vintage-frames-gift-tags-labels-vector-13982819.jpg"), []);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/tag/" + idInfo.slug)
        };
    }

    return (
        <>
            <Title title="Tags"/>
            <SubTitle>
                List of all Tags
            </SubTitle>
            <EntriesList
                    listType={GALLERY}
                    numItemsTotal={numCategories}
                    displayedEntries={displayedCategories}
                    endPrev={endPrev}
                    endNext={endNext}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    currentPagi={currentPagi}
                    setCurrentPagi={setCurrentPagi}
                    onClickHandleMaker={onClickHandleMaker}
                    numItemsPerPage={numItemsPerPage}
                    numPagiButtons={numPagiButtons}
                    
                    />
      
         
        </>
    );
}

export default TagsList;
