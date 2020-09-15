import React from 'react'
import Classes from './Error.css'

const Error = (props) => {
    //  let manageClass = [Classes.Error, Classes.Close]
    //     if(props.Error) {
    //          manageClass = [Classes.Error, Classes.Open]
    //     }
        // console.log(manageClass.join(' '))
    // return (
    //     props.Error ? <div className={manageClass.join(' ')}><p>Search Box is empty</p></div> : null
    // )

    return (
            <div className={Classes.Error} style={{
                transform: props.Error ? 'translateY(0vh)' : 'translate(-4vh)'
            }}><p>Search Box is empty</p></div>
        )
}

export default Error
