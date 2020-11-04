import React from 'react'
import { Link } from 'react-router-dom'

import CoverPhoto from './CoverPhoto/CoverPhoto'
import About from './About/About'
import Classes from './Card.css'

const Card = (props) => {
    return (
        <div className={Classes.Card} >
            {/* <Link > */}
            <button className={Classes.DetailButton} onClick={props.details}>Detail</button>
            {/* <Link to={'/book/' + props.id} style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>Details</Link></button> */}
            <div onClick={props.detailPage} >
                <CoverPhoto link={props.pic} />
                <About
                    bookName={props.bookName}
                    edition={props.edition}
                    author={props.author}
                    price={props.price} />
            </div>
            <button className={Classes.WishList} onClick={() => props.addWishList(props.id)}>ADD to Wish list</button>
        </div>
    )
}

export default Card
