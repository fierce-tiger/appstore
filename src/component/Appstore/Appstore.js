import {
    AppstoreOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import React, {useState} from 'react';
import logo from '../../logo.svg';
import './Appstore.css'
// 7Pages
import UserPage from "./UserPage/UserPage";
import SettingPage from "./SettingPage/SettingPage";
import AppstorePage from "./AppstorePage/AppstorePage";
const { Header, Content, Footer, Sider } = Layout;
const items = [
    { label: `我的服务`, icon: UserOutlined },
    { label: `我的商店`, icon: AppstoreOutlined },
    { label: `我的设置`, icon: SettingOutlined }
].map((props,index) => ({
    key: String(index + 1),
    icon: React.createElement(props.icon),
    label: props.label,
}));
const App = ({logoutFinish}) => {
    const [menuIndex,SetMenuIndex] = useState(`0`);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const setMenuIndex = (items) => {
            items.key === `1` && SetMenuIndex(`1`)
            items.key === `2` && SetMenuIndex(`2`)
            items.key === `3` && SetMenuIndex(`3`)
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
                {/* Here is the button to logout */}
                <Button type="primary" block="true" className="logout-button" onClick={logoutFinish} > Log out </Button>
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
                                { menuIndex === `2` && <AppstorePage/> }
                                { menuIndex === `3` && <SettingPage/> }
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
