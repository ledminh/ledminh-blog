import { Link, useLocation } from "react-router-dom";
import { ROOT_PATH } from "../assets/constants";

import "../css/ErrorPage.css";



const ErrorPage = ({error, title, message}) => {
    const location = useLocation();
       

    return (
        <div className="error-page">
            <div className="title"><h2>{title}</h2></div>
            <div className="content">
                <p>{message}</p>
                <p>Please report this error message to your administrator: </p>
                <code>
                    <p><span className="label">Location: </span>{ROOT_PATH + location.pathname}</p>
                    <p><span className="label">Error name: </span>{error.name}</p>
                    <p><span className="label">Error message: </span>{error.message}</p>
                </code>
                <p>And switch to an appropriate data source or go back <Link to="/">Home</Link></p>
            </div>
        </div>
    )
}

export default ErrorPage;