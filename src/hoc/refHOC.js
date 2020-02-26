/**
 * ref
 */

import React from 'react';

function refHOC(WrappedComponent) {
    return class extends WrappedComponent {
        constructor(props) {
            super(props);
            this.state = {};

            this.wapperRef = React.createRef()
        }

        // componentDidMount() {
        //     super.log()
        // }

        componentDidMount() {
            this.wapperRef.log();
        }

        render() {
            // const newProps = {
            //     desc: "这是一个经 proxyHOC 强化后的组件",
            //     ...this.props
            // };

            // ref 使用函数的方式设置, 可以保证 this.wapperRef 在每次渲染前后都正确指向该组件实例或 DOM
            return <WrappedComponent
                //  {...newProps}
                ref={ref => this.wapperRef = ref}
            />;
        }
    }
}

export default refHOC;