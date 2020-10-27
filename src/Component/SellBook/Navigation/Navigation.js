import React from 'react'

import Classes from './Navigation.css'
import Hambarge from '../../UI/Hambarg/Hambarg'
import NavDetailButton from '../../Detail/NavDetailButton/NavDetailButton'

const Navigation = (props) => {
    return (
        <div className={Classes.NavDetail}>
            <div className={Classes.Div1}>
                <Hambarge clicked={props.Clicked} />
            </div>
            <div className={Classes.Div2}>
                <NavDetailButton />
            </div>
        </div>
    )
}

export default Navigation