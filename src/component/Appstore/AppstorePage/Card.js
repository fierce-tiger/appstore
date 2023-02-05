import {Card} from 'antd';
import {useEffect, useState} from "react";

const {Meta} = Card;
const App = ({description}) => {
    const [reload, setReload] = useState(true)
    useEffect(() => {
        description === null ? setReload(true): setReload(false)
    },[description]);
    return (
        <Card
            hoverable
            style={{
                width: 240,
                marginRight:10
            }}
            loading = {reload}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        >
            <Meta title="Europe Street beat" description={description}/>
            <button> pay </button>
        </Card>
    )

}
export default App;
