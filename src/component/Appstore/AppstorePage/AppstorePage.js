import Card from "./Card";
import {useEffect, useState} from "react";

function AppstorePage() {
    const [loadingFinished, setLoadingFinished] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoadingFinished(true);
        }, 5000);

        return () => {
            clearTimeout(timer)
        };
    });

    return (
        <>
            <h1>xxx用户，你好</h1>
            <div style={{
                flex: 10, display: "flex",
                justifyContent: "left",
                alignItems: "center",
                flexDirection: "row",
            }}>

                <Card description={loadingFinished ? "yuka" : null}/>
                <Card description={loadingFinished ? "Geshin Impact" : null}/>
            </div>
        </>

    );
}

export default AppstorePage;
