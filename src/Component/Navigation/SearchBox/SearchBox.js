import React from 'react'

const SearchBox = (props) => {
    const cla = ["fa fa-search", props.SearchBoxButton];
    let placeholderString = <input type="text" placeholder="Search..."
    name="bookName" 
    autoFocus
    onChange={props.findBook} />

    // if(props.query===0) {
    //     placeholderString = <input type="text" 
    //     placeholder="'Please Enter something in the Search Box!'"
    //     name="bookName" 
    //     onChange={props.findBook} />
    // }
    return (
        
    <div className={props.SearchBoxName}>
        {placeholderString}
        {/* <input type="text" 
            placeholder="Search..."
            name="bookName" 
            onChange={props.findBook} /> */}
        {/* <a className={props.SearchBoxButton} href="/"><i className="fa fa-search" aria-hidden="true"></i> </a> */}
        <i className={cla.join(' ')} aria-hidden="true" onClick={props.clicked} />
    </div>
    )
    
}
export default SearchBox
