import React from 'react'
import { Link } from 'react-router-dom'

import Classes from './SideDrawer.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Auxilary from '../../../hoc/Auxilary'

const SideDrawer = (props) => {
    let manageSideDrawer = [Classes.SideDrawer, Classes.Close]
    if (props.show) {
        manageSideDrawer = [Classes.SideDrawer, Classes.Open]
    }
    return (
        <Auxilary>
            <BackDrop show={props.show} clicked={props.close} />
            <div className={manageSideDrawer.join(' ')}>
                <Link to='/'>Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/sell-your-book">Sell your Books</Link>
                <Link to="/wishlist">Wish List</Link>
            </div>
        </Auxilary>
    )
}

export default SideDrawer
