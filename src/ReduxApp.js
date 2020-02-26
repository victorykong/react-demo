/**
 * redux 的入口文件
 */

import React from 'react';
import ReduxContainer from './redux/containers/ReduxContainer';

import { createStore } from 'redux'; // 创建仓库
import { Provider } from 'react-redux';
import RootReducer from './redux/reducer/reducer'; // combineReducers --> RootReducer


/**
 * dispatch
 * getState
 * replaceReducer
 * subscribe
 */
const store = createStore(RootReducer); // 创建 store

class ReduxApp extends React.Component {


    render() {
        return <Provider store={store}>
            <ReduxContainer />
        </Provider>
    }
}

export default ReduxApp;