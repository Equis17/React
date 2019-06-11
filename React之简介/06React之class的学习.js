import React from 'react'
import ReactDom from 'react-dom'


const person = {
    name: 'zs'
};
import Hello from './05-2分离组件.jsx'
import './class/class_study.js'


ReactDom.render(<div><Hello {...person}></Hello></div>, document.getElementById('app'))
