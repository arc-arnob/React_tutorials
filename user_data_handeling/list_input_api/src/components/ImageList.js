import React from 'react'

const ImageList = (props) => {
    
    const images = props.images.map(({desc, id, urls}) =>{
        return <img alt={desc} key={id} src = {urls.regular} />
    }

    );


    return (
        <div>
            {images}
        </div>
    )
}
export default ImageList
