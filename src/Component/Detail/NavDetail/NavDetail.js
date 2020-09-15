import React from 'react'
import NavDetailButton from '../NavDetailButton/NavDetailButton'
import Classes from './NavDetail.css'
import NavPhone from '../NavPhone/NavPhone'
import Hambarge from '../../UI/Hambarg/Hambarg'

const NavDetail = (props) => {
    console.log(props.owner.phone)
    return(
        <div className={Classes.NavDetail}>
           <div className={Classes.Div1}>
                <Hambarge clicked={props.Clicked}/>
                <NavPhone phone={props.owner.phone}/>
           </div>
            <div className={Classes.Div2}>
                <NavDetailButton />
            </div>
        </div>
    )
}

export default NavDetail