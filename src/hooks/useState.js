import ReactDOM from 'react-dom';

import App from '../HooksApp.js';

function useState(initValue) {
    let state = initValue;

    let setState = newState => {
        state = newState;

    }

    return [state, setState];

}

export default useState;