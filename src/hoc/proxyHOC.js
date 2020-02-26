/**
 * 属性代理
 */

import React from 'react';

function proxyHOC(WrappedComponent) {
    return class extends React.Component {

        // componentDidMount() {
        //     console.log('did mount!');
        //     this.setState({
        //         componentName: "我被修改了"
        //     })

        // }

        log() {
            console.log('input log')
        }

        render() {

            const newProps = {
                desc: "这是一个经 proxyHOC 强化后的组件",
                ...this.props
            };

            // console.log(this.props); // 透传 props
            // console.log(this.state); // 可以操作到 WrappedComponent 中的 state

            return <WrappedComponent {...newProps} />;

            // return super.render();
        }
    }

    // return (props) => <WrappedComponent {...props} />
}

export default proxyHOC;