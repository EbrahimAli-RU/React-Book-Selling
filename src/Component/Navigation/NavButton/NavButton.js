import React from 'react'
import { Link } from 'react-router-dom'

import Auxilary from '../../../hoc/Auxilary'
const NavButton = (props) =>(
    <Auxilary>
        <button style={{
            marginRight: '2%'
        }} ><Link to="/login">Login</Link></button>
        <button><Link to="/signup">Signup</Link></button>
        <button className={props.SellBook} style={{padding:'6px 20px'}}><Link to="/sell-your-books">SellBooks</Link></button>
    </Auxilary>
    
)

export default NavButton
