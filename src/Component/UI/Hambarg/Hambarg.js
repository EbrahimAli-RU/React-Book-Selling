import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Auxilary from '../../../hoc/Auxilary'

const style = {
    paddingLeft: '20px',
    fontSize: '30px',
    cursor: 'pointer',
    color: 'black'
}
const Hambarge = (props) => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        }
    }
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensios] = useState(getWindowDimensions());
        useLayoutEffect(() => {
            function handleResize() {
                setWindowDimensios(getWindowDimensions());
                window.addEventListener('resize', handleResize);
                handleResize()
                return () => window.removeEventListener('resize', handleResize);
            }
        }, []);
        return windowDimensions;
    }
    const { height, width } = useWindowDimensions();
    let selectButton = <Link to="/"><i className="fa fa-home fa-2x" style={style} aria-hidden="true"></i></Link>

    if (width < 1090) {
        selectButton = (<i style={style}
            className="fa fa-bars fa-2x"
            aria-hidden="true" onClick={props.clicked}></i>)
    }
    return (
        <Auxilary>
            {selectButton}
        </Auxilary>
    )
}
export default Hambarge