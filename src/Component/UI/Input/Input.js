import React from 'react'
import Classses from './Input.css'

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [Classses.Input]
    if(!props.Invalid && props.Touched) {
        inputClasses.push(Classses.Invalid);
    }
    switch (props.elementType) {
        case ('input') :
            inputElement = <input className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                // {...props.value}
                value={props.value}
                onChange={props.userInput} />
            break;
        default :
            inputElement = <input className={inputClasses.join(' ')} 
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