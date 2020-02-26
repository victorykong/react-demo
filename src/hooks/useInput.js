import React, { useState, useCallback } from 'react';

function useInput(initValue) {
    const [error, setError] = useState(""); // 错误提示

    const [val, setVal] = useState(initValue); // 初始值

    const onChange = useCallback(event => setVal(event.target.value), []);



    return {
        val,
        onChange,
        error
    }


}

export default useInput;