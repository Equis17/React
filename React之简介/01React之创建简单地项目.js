import React from 'react'
import ReactDom from 'react-dom'


//在React中,如果要创建DOM,只能使用React提供的 JS API来创建,不能像VUE中手写html
//React.createElement()方法,用于创建虚拟DOM对象
//参数1:表示创建类型
//参数2:元素的属性对象
//参数3:虚拟DOM,表示该 元素子节点
var myDiv=React.createElement('div',{id : 'mydiv',title : 123},'123213');

ReactDom.render(myDiv, document.getElementById('app'));
