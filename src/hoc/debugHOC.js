/**
 * 调试组件
 * 
 * 在开发阶段可以对原有组件进行 render 方法中 的 props state 的输出到控制台
 */

import React from 'react';

function debugHOC(WrappedComponent) {
    // extends 的是 传进来的组件
    return class extends WrappedComponent {

        render() {
            console.log('props', this.props);
            console.log('state', this.state);
            // console.log(super.render().type); // Symbol(react.fragment)
            return <div style={{ border: '1px solid red' }}>
                {super.render()}
            </div>
        }

    }
}

export default debugHOC;