import React from 'react'
import { Link } from 'react-router-dom'

import Auxilary from '../../../hoc/Auxilary'
const NavButton = (props) => {
    let item = (<Auxilary>
        <button><Link to="/signup">Signup</Link></button>
        <button className={props.SellBook} style={{ padding: '6px 20px' }}>
            <Link to="/login">Login</Link></button>
    </Auxilary>)
    if (props.token) {
        item = (<Auxilary>
            <button><Link to="/ownbooks">OwnBooks</Link></button>
            <button className={props.SellBook} style={{ padding: '6px 20px' }}>
                <Link to="/logout">LogOut</Link></button>
        </Auxilary>)
    }
    return (
        <Auxilary>
            <button style={{
                marginRight: '2%'
            }} ><Link to="/sell-your-book">SellBooks</Link></button>
            {item}
        </Auxilary>
    )
}
export default NavButton
