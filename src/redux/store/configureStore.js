import { createStore, applyMiddleware, compose } from 'redux'; // 创建仓库 & applyMiddleware 注入中间件

import RootReducer from '../reducer/index' // reducer

// 中间件
import thunkMiddleware from 'redux-thunk'; // 允许我们 dispatch() 函数
import { createLogger } from 'redux-logger'; // 用来打印 action 日志
import { composeWithDevTools } from 'redux-devtools-extension'; // redux-devtools

// import { logger, myApplyMiddleware, thunk } from '../middleware'; // 自定义中间件

import monitorReducerEnhancer from '../enhances/monitorReducer'; // 计算出处理 reducer 的执行性能

const loggerMiddleware = createLogger(); // 创建日志中间件

/**
 * 创建并返回一个 store
 */
function configureStore(initState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]; // 中间件数组


    const middlewareEnhancer = applyMiddleware(...middlewares);


    const enhances = [middlewareEnhancer, monitorReducerEnhancer]; // // 增强


    const composedEnhancers = composeWithDevTools(...enhances);


    const store = createStore(RootReducer, initState, composedEnhancers);


    // 它允许你在开发环境修改 reducer 文件夹内的代码时, 无需清空 state 重新加载, 而是热更新
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducer', () => store.replaceReducer(RootReducer))
    }

    // console.log(process.env.NODE_ENV); // development


    return store;
}


export default configureStore;




// 创建 store
// 省略参数2: 可以给 store 传入一个初始 state
// const store = createStore(RootReducer, undefined, applyMiddleware(
//     thunk,
//     // loggerMiddleware
//     logger
// ));

// const store = createStore(RootReducer);
// myApplyMiddleware(store, [logger, thunkMiddleware])


// 直接修改 store.dispatch
// const next = store.dispatch; // 保存
// store.dispatch = action => {
//     console.log('dispatching',action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result;
// }