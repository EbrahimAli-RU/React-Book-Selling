import React from 'react'
import Classes from './AboutBook.css'

const AboutBook = (props) => {
    return(
        <div className={Classes.AboutBook}>
            <h2>Book</h2>
            <p>Name: {props.book.bookName}</p>
    <p>Author: {props.book.authorName}</p>
    <p>Edition: {props.book.edition}</p>
    <p>Language: {props.book.language}</p>
    <p>Number of page: {props.book.numberOfPage}</p>
    <p>Publication: {props.book.publication}</p>
    <p>Price:  {props.book.price}</p>
        </div>
    )
}

export default AboutBook;