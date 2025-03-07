import React, {useContext} from 'react'
import PixabayContext from '../context/PixabayContext'

const Images = () => {

    const {imageData} = useContext(PixabayContext)

    return (
        <div className="main">
          {imageData.map((image) => (
            <div key={image.id}>
              <div className="item">
                <img src={image.largeImageURL} alt="img" />
              </div>
            </div>
          ))}
        </div>
    );
}

export default Images