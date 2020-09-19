import React, { Component } from 'react'

import Classes from './Container.css'
import Card from './Card/Card'
import NoDataFound from './NoDataFound/NoDataFound'

class Container extends Component {
    // state = {
    //     slug: null
    // }

    openDetailPage = (id) => {
        // axios.get(`book/${id}`).then(response => {
        //     console.log(response.data.data.book)
        // }).catch(err => {
        //     console.log(err)
        // }) 
    }

    searchButtonHandler = () => {
        
    }
    addWishListHandler = () => {
        console.log('Clicked on Add wish list')
    }
    render() {
        const books = this.props.list.map((el, i) => {
            return (
                
                    <Card bookName={el.bookName}
                    edition={el.edition}
                    price={el.price}
                    author={el.authorName[0]}
                    detailPage={() => this.openDetailPage(el._id)}
                    addWishList={this.addWishListHandler}
                    pic={el.coverPhoto}
                    key={i+1}
                    id={el._id}/>
               
            )
            
        })
        let book = books
        if(this.props.list.length === 0) {
            book = <NoDataFound />
        }
        return (
            
            <div className={Classes.Container}>
                {book}
            </div>

        )
    }
}

export default Container
