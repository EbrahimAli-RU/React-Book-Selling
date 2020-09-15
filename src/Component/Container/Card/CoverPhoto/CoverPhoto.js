import React from 'react'

import Classes from './CoverPhoto.css'
const CoverPhoto = (props) => (
    <div className={Classes.CoverPhoto}>
        <img src={props.link} alt="Cover"/>
    </div>
)

export default CoverPhoto
