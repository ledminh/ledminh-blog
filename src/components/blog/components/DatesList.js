import SubTitle from "./SubTitle";
import Title from "./Title";

import { useFeatureImageActions } from "../redux/useActions";

import { useEffect } from "react";
import { useHistory } from "react-router";

import useDatesList from "../redux/useDatesList";

import '../css/DatesList.css';
import useDataInitialized from "../redux/useDataInitialized";
import LoadingPage from "./LoadingPage";


const DatesList = () => {
    const dataInitialized = useDataInitialized();

    const dates = useDatesList(); 
    const {featureImage, data} = dates;
    
    const {setFeatureImageURL} = useFeatureImageActions();
    
    const history = useHistory()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFeatureImageURL(""), []);

    useEffect(() => {
        if(dataInitialized) {
            setFeatureImageURL(featureImage.url);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataInitialized]);
    
    

    const onClickHandleMaker = (idInfo) => {

        return () => {
            history.push("/date/" + idInfo.slug)
        };
    }

    return (
        dataInitialized?
        (<>
            <Title title="Dates"/>
            <SubTitle>
                List of all dates when there were something published
            </SubTitle>
            <div className="dates-list">
                <ul>
                {
                    data.map((d)  => (
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