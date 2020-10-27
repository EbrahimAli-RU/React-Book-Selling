import React from 'react'
import Classes from './Error.css'

const Error = (props) => {
    return (
        <div className={Classes.Error} ><p>{props.data}</p></div>
    )
}

export default Error
