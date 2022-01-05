import "../css/DataSourceSelectors.css";
import { useDataLoadActions } from "../redux/useActions";
import { useState } from "react";



const DataSourceSelectors = () => {
    const {setDataSourceLocal, setDataSourceWP} = useDataLoadActions();
    const [dataSourceText, setDataSourceText] = useState("local");

    
    const [active, setActive] = useState(false);    


    return (
        <div className={"data-source-selectors" + (active? " active" : "")}>
            <ul>
                <span className="title"
                    onClick={() => {
                        setActive(!active);
                    }}
                >
                        Source: {dataSourceText} (click here to {active? "close" : "change the source"})
                </span>
                <li onClick={() => {
                        setActive(false);
                        setDataSourceLocal();
                        setDataSourceText("local");
                        }}>Local</li>
                <li onClick={() => {
                        setActive(false);
                        setDataSourceWP();
                        setDataSourceText("https://www.ledminh.com");
                        }}>https://www.ledminh.com</li>
                <li>
                    <OtherWordpressSite
                        setActive={setActive}
                        setDataSourceWP={setDataSourceWP}
                        setDataSourceText={setDataSourceText}
                        />
                </li>
            </ul>
        </div>

    )
}


const OtherWordpressSite = ({setDataSourceWP, setDataSourceText, setActive}) => {
    const [showInput, setShowInput] = useState(false);
    
    const [wpAddress, setWPAddress] = useState("");

    const keyDownListenner = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            setActive(false);
            setDataSourceWP(wpAddress);
            setDataSourceText(wpAddress);

            setWPAddress("");
        }
    }

    return (
        showInput?
        <input className="ows-input"
                placeholder="Enter address here ..."
                value={wpAddress}
                onChange={(e) => {
                    if(e.target.value === ""){
                        setActive(false);
                    }
                    else{
                        setActive(true);
                    }
                    setWPAddress(e.target.value);
                }}
                onKeyDown={keyDownListenner}
        />
        :
        <span onClick={() => setShowInput(true)}>Other wordpress site</span>
    );
}






export default DataSourceSelectors;