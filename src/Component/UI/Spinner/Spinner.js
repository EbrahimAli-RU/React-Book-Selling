import React from 'react'

import Classes from './Spinner.css'

const Spinner = () => {
    return (
        <div className={Classes.Spinner}>
            <div className={Classes.Loading}>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
                <div className={Classes.Obj}></div>
            </div>
        </div>
    )
}


export default Spinner;


