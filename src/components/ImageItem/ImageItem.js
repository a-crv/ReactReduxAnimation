import React from 'react';

import './ImageItem.css';

const ImageItem = ({ leftHandleClick, rightHandleClick, rating, url }) =>
  <div
    onClick={leftHandleClick}
    onContextMenu={rightHandleClick}
    className="image-item"
  >
    <div className="image-item__rating">{rating}</div>
    <img src={url} className="image-item__img" alt="Картинка" />
  </div>

export default ImageItem;