import React from 'react'
import ReactDom from 'react-dom'

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
                    return <div key={index}>
                        <h1>{item.user}</h1>
                        <h2>{item.content}</h2>
                    </div>
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
