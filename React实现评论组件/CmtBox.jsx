import React from 'react'

export default class CmtBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>这是评论组件</h1>
            <div>
                <label>评论人:</label>
                <input type="text" ref='user'/></div>
            <div>
                <label>内容:</label>
                <textarea rows='3' cols="30" ref='content'></textarea>
            </div>
            <input type="button" value="提交" onClick={this.postComment}/>
        </div>)
    }

    postComment = () => {
        let cmtInfo = {user: this.refs.user.value, content: this.refs.content.value};
        let list = JSON.parse(localStorage.getItem('cmts') || '[]');
        list.unshift(cmtInfo);
        localStorage.setItem('cmts', JSON.stringify(list));

        this.refs.user.value = this.refs.content.value = '';
        this.props.reload();
    }
}
