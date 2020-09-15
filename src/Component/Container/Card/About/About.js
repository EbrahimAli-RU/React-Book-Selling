import React from 'react'

import Auxilary from '../../../../hoc/Auxilary'
const style = {
    lineHeight: '1.3'
}
const About = (props) => {
    let hasEdition = <p style={style}>{props.bookName}</p>;
    if( props.edition ) {
        hasEdition = <p style={style}>{props.bookName}, {props.edition} edition</p>
   }
    return(
        <Auxilary>
            {/* <p style={style}>{props.bookName}, {props.edition} edition</p> */}
            {hasEdition}
            <p style={{
                lineHeight: '.7',
                color:'black'
                // textDecorationStyle: 'none'
            }}><i>{props.author}</i></p>
            <h3 style={{
                lineHeight: '.8'
            }}>${props.price} TK</h3>
        </Auxilary>
    )
}

export default About
