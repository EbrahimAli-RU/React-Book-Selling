import React from 'react' 
import Classes from './SubmitButton.css'

const SubmitButton = (props) => (
    <button  className={Classes.SubmitButton}>{props.name}</button>
)

export default SubmitButton