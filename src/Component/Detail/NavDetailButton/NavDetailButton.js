import React from 'react'
import DetailButton from '../DetailButton/DetailButton'
import Auxilary from '../../../hoc/Auxilary'

const navDetailButton = (props) => {
    return(
        <Auxilary>
            <DetailButton link='/login' label='Login'/>
            <DetailButton link='/signUp' label='Sign Up'/>
            <DetailButton link='/sell-your-book' label='SellBook'/>
        </Auxilary>
    )
}

export default navDetailButton