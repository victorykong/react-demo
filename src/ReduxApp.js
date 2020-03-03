/**
 * redux 的入口文件
 */

import React from 'react';
import App from './redux/component/App'

import { Provider } from 'react-redux'; // 提供器
import configureStore from './redux/store/configureStore'; // return (middware enhance) store



const store = configureStore();


class ReduxApp extends React.Component {

    render() {
        // store.subscribe(() => console.log(store.getState())) // 手动监听 store 中 state 的变化
        return <Provider store={store}>
            <App />
        </Provider>
    }
}


export default ReduxApp;