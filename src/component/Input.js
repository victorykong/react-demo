import React from 'react';

import debugHOC from '../hoc/debugHOC.js' // 调试
import proxyHOC from '../hoc/proxyHOC.js' // props 代理
import refHOC from '../hoc/refHOC.js'     // ref 传递

import inputHOC from '../hoc/inputHOC.js';


const compose = (...parmas) => parmas.reduce((item, next) => (...args) => next(item(...args)));


// @debugHOC
// @proxyHOC
// @refHOC

class Input extends React.Component {

    // state = {
    //     value: ""
    // }

    // submit() {
    //     console.log(this.state.value)
    // }

    render() {
        console.log(this.props)
        return <>
            {/* <input
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}

            />
            <button onClick={() => this.submit()}>提交</button> */}


            <div>
                <input {...this.props} />
            </div>


            <div>
               错误信息: {this.props.error}
            </div>
        </>
    }

}

// 同时被三个 hoc 增强
// export default refHOC(proxyHOC(debugHOC(Input)));

// compose
// const handleReduce = compose(debugHOC, proxyHOC, refHOC);
// export default handleReduce(Input);

export default inputHOC(Input);