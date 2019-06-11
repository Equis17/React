import React from 'react'
import ReactDom from 'react-dom'


const person = {
    name: 'zs'
};
import Hello from './05-2分离组件.jsx'
import './class/class_study.js'

class Hello2 extends React.Component {

    render() {
        return (
            <div>
                <h2>hello --{this.props.name}</h2>
            </div>
        );
    }
}
/*在function中 只有props属性
* 在calss中 除了有this.props还有state私有数据,专门存放私有数据
* 用function创建的组件叫做无状态组件
* 用class创建的组件叫做有状态组件
* 本质区别是有无state属性,class创建的组件有生命周期
*
* 什么时候使用有状态组件,什么时候使用无状态组件?
* 固定渲染:无状态组件(优点:运行速度相对快)
* 需要在不同阶段渲染执行不同的业务逻辑:有状态组件
*
* */
ReactDom.render(<div><Hello2 name='1'></Hello2></div>, document.getElementById('app'))
