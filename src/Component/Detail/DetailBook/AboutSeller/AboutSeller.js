import React from 'react'
import Classes from './AboutSeller.css'

const AboutSeller = (props) => {
    return(
        <div className={Classes.AboutSeller}>
            <p>Name: {props.seller.firstName}</p>
            <p>Phone: {props.seller.phone}</p>
        </div>
    )
}

export default AboutSeller