import React from 'react';

import Classes from './InputImage.css'

const InputImage = (props) => {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        event.preventDefault();
        hiddenFileInput.current.click()
    }
    return (
        <div className={Classes.ImageContainer}>
            <img src={props.value} alt="ImageCover" />
            <button onClick={handleClick}>Add Photo</button>
            <input
                type="file"
                alt="COVERPHOTO"
                onChange={props.coverPhotoHandler}
                ref={hiddenFileInput} style={{ display: 'none' }} />
        </div>
    );
}

export default InputImage;