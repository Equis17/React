import React from 'react'
import { Spin, Alert } from 'antd';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    /*
    fetch('url').
    then((response)=>{
    return response.json();
    })
    .then((data)=>{
        console.log(data)
    })
    *
    * */
    componentWillMount() {
    }

    render() {
        return (
            <div>
                <Spin tip="Loading...">
                    <Alert
                        message="正在请求列表"
                        description="精彩内容,马上呈现..."
                        type="info"
                    />
                </Spin>,
            </div>
        );
    }
};
