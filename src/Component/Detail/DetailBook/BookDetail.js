import React from 'react' 
import Classes from './BookDetail.css'
import ImageSlider from '../ImageSlider/ImageSlider'
import AboutBook from './AboutBook/AboutBook'
import AboutSeller from './AboutSeller/AboutSeller'

const BookDetail = (props) => {
    return(
        <div className={Classes.BookDetail}>
            <ImageSlider 
                otherPhoto={props.Book.photo}
                coverPhoto={props.Book.coverPhoto}/>
            <AboutBook book={props.Book}/>
            <AboutSeller seller={props.Seller}/>
        </div>
    )
}

export default BookDetail