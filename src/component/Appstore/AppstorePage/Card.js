import {Card, Spin} from 'antd';
import React, {useEffect, useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";

const {Meta} = Card;
const App = ({data}) => {
    const [reload, setReload] = useState(true)
    useEffect(() => {
        data === null ? setReload(true) : setReload(false)
    }, [data]);
    const antIcon = <LoadingOutlined style={{fontSize: 64}} spin/>;
    return (
        <Card
            hoverable
            style={{
                width: 240,
                marginRight: 10
            }}
            loading={reload}
            cover={
            reload?<Spin indicator={antIcon}/>:
            <img alt="example" src={!!data ? data.thumbnail : null}/>
        }
        >
            <Meta title={!!data ? data.name : null} description={!!data ? data.desc : null}/>
        </Card>
    )

}
export default App;
