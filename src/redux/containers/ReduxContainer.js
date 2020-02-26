import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ReduxContainer extends React.Component {


    render() {
        console.log(this.props)
        return <>
            <div>redux hello world</div>


            {/* <button onClick={() => this.props.dispatch({ type: types.INCREMENT })}>+1</button> */}
            <button onClick={() => this.props.increMent()}>+1</button>
        </>
    }
}



// 将 store 中的 state 注入到 props
const mapStateToProps = state => state

export default connect(
    mapStateToProps,
    actions
)(ReduxContainer);