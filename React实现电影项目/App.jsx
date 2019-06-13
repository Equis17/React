import React from 'react'

import {HashRouter, Route, Link} from 'react-router-dom'
//ant design
import {Layout, Menu} from 'antd';
const {Header, Content, Footer} = Layout;

//container
import HomeContainer from './component/home/HomeContainer.jsx'
import AboutContainer from './component/about/AboutContainer.jsx'
import MovieContainer from './component/movie/MovieContainer.jsx'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return  <HashRouter>
                <Layout className="layout" style={{height:'100%'}}>
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
                            <Menu.Item key="movie"><Link to='/movie/in_theater/1'>电影</Link></Menu.Item>
                            <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px',height:'100%',backgroundColor:'#fff'}} >
                        <Route path={'/home'} component={HomeContainer}></Route>
                        <Route path={'/about'} component={AboutContainer}></Route>
                        <Route path={'/movie'} component={MovieContainer}></Route>

                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>

            </HashRouter>

    }
}
