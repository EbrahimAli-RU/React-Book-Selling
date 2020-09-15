import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CoverPhoto from './CoverPhoto/CoverPhoto'
import About from './About/About'
// import Pic from '../../../assets/CoverPhoto/CoverPhoto.jpeg'
import Classes from './Card.css'

class Card extends Component {
    
    // 
    render() {
        return (
            <div className={Classes.Card} >
               <Link to={'/book/' + this.props.id} style={{
                        textDecoration: 'none'
                    }}>
                    <div onClick={this.props.detailPage} >
                    <CoverPhoto link={this.props.pic} />
                        <About 
                            bookName={this.props.bookName} 
                            edition={this.props.edition}
                            author={this.props.author}
                            price={this.props.price}/>
                            {/* <button>Details</button> */}
                    </div>
               </Link>
               
                    <button className={Classes.WishList} onClick={this.props.addWishList}>ADD to Wish list</button>
            </div>
        )
    }
}

export default Card
