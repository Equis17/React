import React from 'react'
import ReactDom from 'react-dom'


function Hello(){
    return <div>
        <h1>hello</h1>
    </div>
}
/*如果标签为小写 则解析为html标签
* 如果标签首字母为大写 则按照组件的形式去渲染
* */
ReactDom.render(<div>
    <Hello></Hello>
</div>,document.getElementById('app'))
