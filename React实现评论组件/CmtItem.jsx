import React from 'react'

export default class CmtItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <h3>评论人:{this.props.user}----内容:{this.props.content}</h3>
        </div>)
    }
}
