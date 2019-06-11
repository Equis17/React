import React from '_react@16.8.6@react'
import ReactDom from '_react-dom@16.8.6@react-dom'


function Hello(props) {
    return <div>
        <h1>hello {props.name}</h1>
    </div>
}

const Person = {
    name: 'zs',
    age: 15,
    gender: 'male'
}
/*如果标签为小写 则解析为html标签
* 如果标签首字母为大写 则按照组件的形式去渲染
* */
ReactDom.render(
    <div>
        <Hello {...Person}/>
    </div>,
    document.getElementById('app'));
