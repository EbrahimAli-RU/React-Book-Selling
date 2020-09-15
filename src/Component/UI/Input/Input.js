import React from 'react'
import Classses from './Input.css'

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input') :
            inputElement = <input className={Classses.Input} 
                {...props.elementConfig} 
                // {...props.value}
                value={props.value}
                onChange={props.userInput} />
            break;
        default :
            inputElement = <input className={Classses.Input} 
                {...props.elementConfig} 
                value={props.value} />
            break;

    }

    return(
        <div >
            <label>{props.label}</label>    
            {inputElement}
        </div>
    )
}

export default Input