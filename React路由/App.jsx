import React from 'react'
//HashRouter表示路由的根容器,Route表示路由规则,有path,component,Link表示路由链接
import {HashRouter,Route,Link} from 'react-router-dom'
export default class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            //使用HashRouter包裹起来,网站就开始启用路由了,并且只能有一个唯一根元素
            <HashRouter>
                <h1>App</h1>
            </HashRouter>
        );
    }

}
