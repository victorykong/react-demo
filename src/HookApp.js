import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';



// function ChildCom(props) {
//     const { bar, baz } = props;

//     useEffect(() => {
//         console.log('ChildCom effect action!')
//         // 仅仅这里做了改动
//     }, [bar, baz])

//     return <div>It is ChildCom!</div>
// }


// function HookApp() {
//     const [loading, setLoading] = useState(false);

//     const bar = useCallback(() => { }, []);
//     const baz = useMemo(() => [1, 2, 3], []); // [1,2,3] 相当于调用了一个函数的返回值
//     return <>
//         <ChildCom
//             bar={bar}
//             baz={baz}
//         />

//         {/* 每点击一次按钮, child effect 将都会触发 */}
//         <button onClick={() => setLoading(loading => !loading)}>切换loading</button>

//     </>
// }




// class HookApp extends React.Component {
//     state = {
//         count: 1
//     }


//     handleClick() {
//         // this.setState({ count: this.state.count + 1 }, () => console.log(this.state))


//         // this.setState({ count: this.state.count + 1 });
//         // setTimeout(() => { console.log(this.state.count) }); // 宏任务

//     }


//     render() {
//         return <>
//             <div>{this.state.count}</div>
//             <button onClick={this.handleClick.bind(this)}>点我</button>
//         </>
//     }
// }



function usePreCount(val) {
    const prevCountRef = useRef(); // 装变量的盒子

    // 该 effect hook 每次都会被调用
    useEffect(() => {
        prevCountRef.current = val;
    })
    return prevCountRef.current
}


function HookApp() {
    const [count, setCount] = useState(0);

    const preCount = usePreCount(count); // 自定义 hook

    return <>
        <h1>Now: {count}, before: {preCount}</h1>
        <button onClick={() => setCount(count + 1)}>点我</button>
    </>
}



export default HookApp;