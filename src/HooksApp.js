import React from 'react';

// import Effecthooks from './hooks/Effecthooks.js';

// import Refhooks from './hooks/Refhooks.js';

// import useTitle from './hooks/useTitle.js';

import useInput from './hooks/useInput.js'; // 开发中


function HooksApp() {

    // return <Effecthooks />

    // return <Refhooks />

    // const status = useTitle('page1');

    const { error, ...inputProps } = useInput("");


    return <div>
        <input type="text" {...inputProps} />
        {
            error ? error : "无错误信息"
        }
        <button onClick={() => {
            console.log(inputProps.val)
        }}>提交</button>
    </div>

}

export default HooksApp;
