import React from 'react'

import SearchBox from './SearchBox/SearchBox'
// import Classes from './NavigationItems.css'
import NavigationItem from './NavigatinItem/NavigationItem'
import WishList from './WishList/WishList'
import Auxilary from '../../hoc/Auxilary'
import NavButton from './NavButton/NavButton'
import User from './User/User'

const NavigationItems = (props) => (
    <Auxilary>
        <NavigationItem clicked={props.showSideDrawer} />
        <SearchBox
            SearchBoxName={props.navDivName}
            query={props.queryLength}
            SearchBoxButton={props.navSearchButton}
            findBook={props.searchBook}
            clicked={props.clicked}
        />
        <WishList cla={props.wish} />
        <NavButton SellBook={props.sellBook}
            token={props.token} />
        <User User={props.user} />
    </Auxilary>
)
export default NavigationItems
