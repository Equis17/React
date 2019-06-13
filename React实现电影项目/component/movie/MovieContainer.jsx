import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import {Route, Link} from 'react-router-dom'

const {SubMenu} = Menu;
const {Content, Sider} = Layout;

import MovieList from './MovieList.jsx'

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Layout style={{height: '100%'}}>

                <Layout>
                    <Sider width={200} style={{background: '#fff', height: '100%'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                     <Icon type="user"/>列表
                                </span>}
                            >
                                <Menu.Item key="1"><Link to={'/movie/in_theater/1'}>正在热映</Link></Menu.Item>
                                <Menu.Item key="2"><Link to={'/movie/coming_soon/1'}>即将上映</Link></Menu.Item>
                                <Menu.Item key="3"><Link to={'/movie/top/1'}>TOP250</Link></Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>


                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Route path={'/movie/:type/:page'} component={MovieList}></Route>
                    </Content>

                </Layout>
            </Layout>
        );
    }
}
