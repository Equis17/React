import React from 'react'
import ReactDom from 'react-dom'

let mytitle='123'
let myDiv = <div>
    <h1 title={mytitle}>hhh</h1>
</div>

ReactDom.render(myDiv, document.getElementById('app'));
