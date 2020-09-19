import React from 'react' 
import Classes from './SubmitButton.css'

const SubmitButton = (props) => (
    <button 
        className={Classes.SubmitButton} 
        disabled={props.Checkdisibility}>{props.name}</button>
)

export default SubmitButton