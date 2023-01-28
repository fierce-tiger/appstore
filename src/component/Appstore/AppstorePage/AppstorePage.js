import Card from "./Card";
import {useState} from "react";

function AppstorePage() {
    const [loadingFinished, setLoadingFinished]=useState(false)
    return(
        <>
            {setTimeout(()=>{
                setLoadingFinished(true);
            }, 5000)}
            <h1>xxx用户，你好</h1>
            <Card description={loadingFinished?"abcde":null} />
            <Card/>
        </>
    );
}

export default AppstorePage;