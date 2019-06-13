import React from 'react'
import CmtItem from './CmtItem.jsx'
import CmtBox from './CmtBox.jsx'

export default class CmtList extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            list:[
                {user:'zs',content:123},
                {user:'zs',content:123},
                {user:'zs',content:123},
                {user:'zs',content:123},
            ]
        }
    }
    componentWillMount() {
        this.loadCmts();
    }
        //React父组件向子组件传递方法和参数的方法相同
    render() {
        return(<div>
            <CmtBox reload={this.loadCmts}></CmtBox>
            <hr/>
            <h1>这是评论列表组件</h1>
            {this.state.list.map((item,i)=>{
                return(<CmtItem {...item} key={i}></CmtItem>)
            })}
        </div>)
    }

    loadCmts=()=>{
        let list = JSON.parse(localStorage.getItem('cmts' || '[]'));
        this.setState({list: list});
    }
}
