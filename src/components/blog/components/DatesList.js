import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useDatesList from "../redux/useDatesList";

import '../css/DatesList.css';
import useDataInitialized from "../redux/useDataInitialized";
import LoadingPage from "./LoadingPage";

import { useDatesListActions } from "../redux/useActions";
import ErrorPage from "./ErrorPage";

const DatesList = () => {
    const dataInitialized = useDataInitialized();

    const {featureImage, data} = useDatesList(); 
    const {datesList, dataReady, error} = data;

    const {setDatesList} = useDatesListActions();

    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    
    const history = useHistory()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(""), []);

    useEffect(() => {
        if(dataInitialized) {
            setDatesList();            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataInitialized]);
    
    useEffect(() => {
        if(dataReady) {
            setFeatureImageURL(featureImage.url);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataReady]);
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/date/" + idInfo.slug)
        };
    }

    return (
        error.status?
        <ErrorPage 
                error={error}
                title={"Opps!!! There's some error occurs."}
                message={"Might be the data source is invalid"}
            />:
        dataReady?
        (<>
            <Title title="Dates"/>
            <SubTitle>
                List of all dates when there were something published
            </SubTitle>
            <div className="dates-list">
                <ul>
                {
                    datesList.map((d)  => (
                        <li key={d.name}>
                            <Date
                                onClickHandleMaker={onClickHandleMaker}
                                idInfo={d.idInfo}
                                name={d.name}
                            />
                        </li>
                    ))
                }
                </ul>
            </div>
        </>): (<LoadingPage />)
    );
}

export default DatesList;


const Date = ({onClickHandleMaker, idInfo, name}) => {
    const onClickHandle = onClickHandleMaker(idInfo);

    return (
        <span className="date"
            onClick = {onClickHandle}
        >
            {name}
        </span>
    )
}