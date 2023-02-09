import Card from "./Card";
import {useEffect, useRef, useState} from "react";
import {collection, query, where, getDocs} from "firebase/firestore";

import {db, goods} from "../../../constants/constants";
import {Button, Modal} from "antd";


function AppstorePage() {
    const goodsRef = useRef(null);

    const [loadingFinished, setLoadingFinished] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const handleCancel = () => {
        setLoadingFinished(false);
    };
    useEffect(() => {
        let timer = setTimeout(() => {
            setLoadingFinished(false)
            setShowModal(true)
        }, 5000);
        const ref = collection(db, goods);
        getDocs(query(ref)).then((doc) => {
            goodsRef.current = doc.docs
            clearTimeout(timer)
            setLoadingFinished(true)
        })
        return () => {
            clearTimeout(timer)
        };
    });

    return (<>
            <div style={{
                flex: 10, display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row",
            }}>
                <Modal title="Loading Failed" open={showModal} onOk={handleCancel} onCancel={handleCancel}>
                    <p>Please check your network status.</p>
                </Modal>
                {!loadingFinished ? <Card data={null}/>
                    : goodsRef.current.map((d, index) => {
                        return <Card key={index} data={d.data()}/>
                    })}
            </div>
        </>

    );
}

export default AppstorePage;
