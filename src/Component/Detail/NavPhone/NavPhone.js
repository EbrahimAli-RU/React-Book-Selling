import React from 'react'
import Classes from './NavPhone.css'

const NavPhone = (props) => (
    <p className={Classes.NavPhone}>+88 {props.phone}</p>
)

export default NavPhone