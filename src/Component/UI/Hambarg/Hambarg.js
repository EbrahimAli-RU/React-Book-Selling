import React from 'react'

const Hambarge = (props) => (
    <i style={{
        paddingLeft:'20px',
        fontSize:'30px',
        cursor: 'pointer'}} 
        className="fa fa-bars fa-2x"
        aria-hidden="true" onClick={props.clicked}></i>
    
)

export default Hambarge