import React from 'react'
import ReactTypes from 'prop-types'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initCount
        }
        //在这里可以改变this的指向 返回this的函数引用
        // this.increment=this.increment.bind(this,arg1,arg2)
    }


    static defaultProps = {
        initCount: 0
    }

    static propTypes = {
        initCount: ReactTypes.number
    }

    componentWillMount() {
        //页面挂载前执行
        //能够访问到数据和自定义方法
        //等同于vue中的created
        //此时虚拟dom还未创建(在render()中创建虚拟DOM)
    }

    increment = () => {
        this.setState({
            count:this.state.count+1
            }
        )
    }

    render() {
        //短路运算 如果值为空则不执行
        //在组件运行阶段中 每当调用render函数的时候 页面上的dom也是旧的
        //仅仅新渲染到内存中的新元素 虚拟dom和state都是最新的
        console.log(this.refs.h3&&this.refs.h3.innerHTML);
        return (
            <div>
                <h1>这是计数器</h1>
                <input type="button" value="+1" id="btn" onClick={this.increment}/>
                <hr/>
                <h3>当前的数量是:{this.state.count}</h3>
            </div>
        )

    }

    componentDidMount() {
        //在这个生命周期中 表明组件已经挂载到了页面中
        //如果想要进行dom操作 最早在这个周期进行 相当于vue中的mounted
        // document.getElementById('btn').onclick = () => {
        //         //     this.setState({
        //         //         count:this.state.count+1
        //         //     })
        //         // }
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //return true页面才会重新更新
        //需求state中的count是偶数才更新
        //在这个生命周期中拿到的数值是旧的数值
        //参数一是最新的外部参数
        //参数二是最新的内部参数
        // return this.state.count%2===0
        return nextState.count%2===0
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        //此时页面上的dom是旧的,进行dom操作都是旧dom
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //虚拟dom和state都是最新的 现在页面上是最新的dom 可以去操作DOM
    }
}
