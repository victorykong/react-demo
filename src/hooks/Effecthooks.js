import React, { useState, useEffect } from 'react';

function Effecthooks() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('执行...', count);

        return () => console.log('清理 ()=> ', count);
    }, [count]);
    console.log('页面渲染...', count)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div >
    );

}

export default Effecthooks;