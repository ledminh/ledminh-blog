import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList, { GALLERY } from "./EntriesList";

import { useCategoriesListActions, useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";
import useCategoriesList from "../redux/useCategoriesList";
import useDataInitialized from "../redux/useDataInitialized";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";



const CategoriesList = () => {
    const dataInitialized = useDataInitialized();

    const {data, numPagiButtons, currentPagi, featureImage} = useCategoriesList();
    const {numCategories, displayedCategories, endPrev, endNext, numItemsPerPage, currentPage, error} = data;
    
    const {setCurrentPage, setCurrentPagi} = useCategoriesListActions();
    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory();

    useEffect(() => setFeatureImageURL(""), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    
    useEffect(() => {
        if(dataInitialized)
            setFeatureImageURL(featureImage.url)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[featureImage.url, dataInitialized]);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/category/" + idInfo.slug)
        };
    }

    return (
        error.status?
        <ErrorPage 
                error={error}
                title={"Opps!!! There's some error occurs."}
                message={"Might be the data source is invalid"}
            />:
        dataInitialized?
        (<>
            <Title title="Categories"/>
            <SubTitle>
                List of all categories
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
                    dataReady={true}
                    />  
        </>) : (<LoadingPage />)
    );
}

export default CategoriesList;
