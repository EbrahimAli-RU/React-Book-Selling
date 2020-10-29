import React from 'react'
import Classes from './Error.css'

const Error = (props) => {
    return (
        <div className={Classes.Error} style={{
            opacity: props.show ? '1' : '0'
        }} ><p>{props.data}</p></div>
    )
}

export default Error
