import React from 'react'
import { Link } from 'react-router-dom'
import Classes from './DetailButton.css'
const DetailButton = (props) => {
    return(
        <Link className={Classes.Button} to={props.link} >{props.label}</Link>
    )
}

export default DetailButton