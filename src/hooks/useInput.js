import { useState } from 'react'


const useInput = ({
    initValue = "", // 初始值
    helperText = "", // 校验未通过提示文本
    validator = () => true, // 校验机制, 默认为 true
    validateTriggers = ['onChange'], // 校验触发的方法
} = {}) => {

    const [value, setValue] = useState(initValue); // 内部状态

    const [error, setError] = useState(false); // 当前表单项的验证状态



    /**
     * input 的 onChange 函数
     */
    const onChange = (e) => {
        const { value } = e.target;

        setValue(value);
    }

};








export default useInput;