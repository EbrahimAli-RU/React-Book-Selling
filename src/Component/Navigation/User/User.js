import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => (
    <Link to="/login" className={props.User}><i style={{
        marginRight: '20px',
        size: '40px'
    }} className="fa fa-user-o fa-lg" aria-hidden="true"></i> </Link>
)

export default User


