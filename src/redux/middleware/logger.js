/**
 * 日志中间件
 * next 为 store 提供的 dispatch fn
 */
const logger = store => next => action => {
    console.group(action.type);

    console.log('prev', store.getState()); // 之前的数据

    console.log('action', action); // record action

    let result = next(action); // 派发 action, 并返回 action 对象

    console.log('next state', store.getState()); // 更新后的数据

    console.groupEnd(action.type); // 以 action.type 作为 log组 的结束标签

    return result
}

export default logger;