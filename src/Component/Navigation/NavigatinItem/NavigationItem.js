import React from 'react'

import Auxilary from '../../../hoc/Auxilary'
import Hambarge from '../../UI/Hambarg/Hambarg'

const NavigationItem = (props) => {
    return (
        <Auxilary>
            <Hambarge clicked={props.clicked}/>
            <p>BOOK</p>
        </Auxilary>
    )
}

export default NavigationItem
