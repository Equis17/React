import React from 'react'
import ReactDom from 'react-dom'

function CommonList(props) {
    return <div>
        <span>name:{props.user}</span>
        <span>content:{props.content}</span>
    </div>
}


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cmts: [
                {user: 'zs', content: 'jj'},
                {user: 'zs', content: 'jj'},
                {user: 'zs', content: 'jj'},
                {user: 'zs', content: 'jj'},
                {user: 'zs', content: 'jj'},
                {user: 'zs', content: 'jj'}
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.cmts.map((item, index) => {
                    return <CommonList {...item} key={index}></CommonList>
                })}
            </div>
        );
    }
}


ReactDom.render(
    <div>
        <List></List>
    </div>
    , document.getElementById('app'));
