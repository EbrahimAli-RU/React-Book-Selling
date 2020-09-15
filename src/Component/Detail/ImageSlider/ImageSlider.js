import React from 'react' 
import Classes from './ImageSlider.css'

const ImageSlider = (props) => {
    const outerDiv = [Classes.slidershow, Classes.middle];
    const slideS1 = [Classes.slide, Classes.s1]
    const photos = props.otherPhoto.map((el, i) => {
        return(
            <div className={Classes.slide} key={i+1}>
                    <img src={el} alt="" />
            </div>
        )
    })
    return(
        <div className={Classes.BookPhoto}>
        <div className={outerDiv.join(' ')}>
            <div className={Classes.slides}>
                <input type="radio" name="r" id={Classes.r1} defaultChecked />
                <input type="radio" name="r" id={Classes.r2} />
                <input type="radio" name="r" id={Classes.r3} />
                <input type="radio" name="r" id={Classes.r4} />
                <div className={slideS1.join(' ')}>
                    <img src={props.coverPhoto} alt="" />
                </div>
                {photos}
            </div>

        <div className="navigation">
            <label htmlFor={Classes.r1} className={Classes.bar}></label>
            <label htmlFor={Classes.r2} className={Classes.bar}></label>
            <label htmlFor={Classes.r3} className={Classes.bar}></label>
            <label htmlFor={Classes.r4} className={Classes.bar}></label>
        </div>
    </div>
    </div>
    )
}

export default ImageSlider;