import React, { useRef } from 'react';


function Refhooks() {

    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );

}
export default Refhooks;