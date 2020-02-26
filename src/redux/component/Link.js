import React from 'react'

const Link = props => {
    return <button
        onClick={props.onClick}
        disabled={props.active}
        style={{
            marginLeft: '4px'
        }}
    >
        {props.children}
    </button>
}

export default Link