import Card from "./Card";
import {useEffect, useState} from "react";

function AppstorePage() {
    const [loadingFinished, setLoadingFinished]=useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoadingFinished(true);
        }, 5000);

        return () => { clearTimeout(timer) };
    });

    return(
        <>
            <h1>czp用户，你好</h1>
            <Card description={loadingFinished ? "yuka" : null} />
            <Card description={loadingFinished ? "Geshin Impact" : null} />
        </>
    );
}

export default AppstorePage;