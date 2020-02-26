import React, { useState } from 'react';

// import Effecthooks from './hooks/Effecthooks.js';

// import Refhooks from './hooks/Refhooks.js';

// import useTitle from './hooks/useTitle.js';

// import useInput from './hooks/useInput.js';


function HooksApp() {

    // return <Effecthooks />

    // return <Refhooks />

    // const status = useTitle('page1');

    // const { error, ...inputProps } = useInput("");

    const [count, setCount] = useState(0);

    return <div>
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>+1</button>
    </div>



    // <div>
    //     <input type="text" {...inputProps} />
    //     {
    //         error ? error : "无错误信息"
    //     }
    //     <button onClick={() => {
    //         console.log(inputProps.val)
    //     }}>提交</button>
    // </div>




    // <div>
    //     <p>page1</p>
    //     status:{status ? 'success' : 'error'}
    // </div>

}

export default HooksApp;
