import React from 'react';

import proxyHOC from '../hoc/proxyHOC.js';
import refHOC from '../hoc/refHOC.js';
import debugHOC from '../hoc/debugHOC.js';

class TestHoc extends React.Component {
    state = {
        componentName: 'TestHoc'
    }


    log() {
        console.log('打印一条日志');
    }


    render() {
        return <>
            <div>描述：{this.props.desc}</div>
            <div> {this.props.count}</div>
        </>
    }
}

// export default proxyHOC(TestHoc);
// export default refHOC(TestHoc);
export default debugHOC(TestHoc);