import React from 'react'

import Classes from './Modal.css'
const Modal = (props) => (
    
    <div className={Classes.Modal} style={{
        transform: props.show ? 'translateX(0)' : 'translateX(-100vh)',
        opacity: props.show ? '1' : '0'}}>
    </div>
)

export default Modal
