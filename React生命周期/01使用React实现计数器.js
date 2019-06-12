import React from 'react'
import ReactDom from 'react-dom'
import Counter from './counter.jsx'

ReactDom.render(
    <div>
        <Counter initCount={3}></Counter>
        <hr/>
        {/*这里使用了prop-types包 用来过滤数据 如果输入了非数字则会报错*/}
        <Counter initCount={1}></Counter>
    </div>,
document.getElementById('app'))
