/**
 * 同步 action creator 
 * 
 * type: action type
 * argNames: action 对象中的属性
 * args: action 对象中的值, 也可以说是传入的参数
 */

const myActionCreator = (type, ...argNames) => (...args) => {

    const action = { type }; // { type: "", name: "zs", age: 18 }
    argNames.forEach((arg, index) => {
        action[arg] = args[index];
    })

    return action;
}


export default myActionCreator;


