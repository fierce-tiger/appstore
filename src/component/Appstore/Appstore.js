import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    TeamOutlined,
    MailOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, {useState} from 'react';
import logo from '../../logo.svg';
import './Appstore.css'
// 7Pages
import UserPage from "./UserPage/UserPage";
import MailPage from "./MailPage/MailPage";
import AppstorePage from "./AppstorePage/AppstorePage";
import {getAuth} from "firebase/auth";
import {firebaseApp} from "../../constants/constants";
const { Header, Content, Footer, Sider } = Layout;
const items = [
    { label: `我的服务`, icon: UserOutlined },
    { label: `我的消息`, icon: MailOutlined },
    { label: `我的主页`, icon: BarChartOutlined },
    { label: `我的云端`, icon: CloudOutlined },
    { label: `我的商店`, icon: AppstoreOutlined },
    { label: `我的朋友`, icon: TeamOutlined },
    { label: `我的设置`, icon: SettingOutlined }
].map((props,index) => ({
    key: String(index + 1),
    icon: React.createElement(props.icon),
    label: props.label,
}));
const App = () => {
    const [menuIndex,SetMenuIndex] = useState(`0`);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const setMenuIndex = (items) => {
            items.key === `1` && SetMenuIndex(`1`)
            items.key === `2` && SetMenuIndex(`2`)
            items.key === `3` && SetMenuIndex(`3`)
            items.key === `4` && SetMenuIndex(`4`)
            items.key === `5` && SetMenuIndex(`5`)
            items.key === `6` && SetMenuIndex(`6`)
            items.key === `7` && SetMenuIndex(`7`)
    }
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                {/* icon position */}
                <div className="icon-board"
                    style={{
                        height: 32,
                        margin: 16,
                        /*background: 'rgba(255, 255, 255, 0.2)',*/
                    }}
                >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Appstore</h2>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} onClick={setMenuIndex} />
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '16px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{
                            padding: 20,
                            textAlign: 'center',
                            background: colorBgContainer,
                        }}
                    >
                        {/*write content here*/}
                        {
                            // indicates very long content
                            <React.Fragment >
                                { menuIndex === `1` && <UserPage/> }
                                { menuIndex === `2` && <MailPage/> }
                                { menuIndex === `3` && null }
                                { menuIndex === `4` && null }
                                { menuIndex === `5` && <AppstorePage/> }
                                { menuIndex === `6` && null }
                                { menuIndex === `7` && null }
                            </React.Fragment>
                        }
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ziyan的Appstore
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
