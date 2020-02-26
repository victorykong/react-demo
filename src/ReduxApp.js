/**
 * redux 的入口文件
 */

import React from 'react';
import App from './redux/component/App'

import { createStore } from 'redux'; // 创建仓库
import { Provider } from 'react-redux';
import RootReducer from './redux/reducer/index'


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
            <App />
        </Provider>
    }
}

export default ReduxApp;