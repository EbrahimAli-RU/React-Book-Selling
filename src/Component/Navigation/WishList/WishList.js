import React from 'react'
import { Link } from 'react-router-dom'

const WishList = (props) => (
    <Link className={props.cla} style={{
            paddingRight:'10px',
            marginRight: '2%'
    }} to="/wishlist"><i style={{
        marginRight: '20px',
        size: '40px'
    }} className="fa fa-heart-o fa-lg" aria-hidden="true"></i> </Link>

)

export default WishList