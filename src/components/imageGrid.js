import React from 'react';

const ImageGrid = ({ images }) => (
  <div className="row">
    {images.map((image, index) => (
      <div key={index} className="col-3 p-2">
        <a href={image.href}>
          <img src={image.src} width="100%" alt={image.alt} />
        </a>
      </div>
    ))}
  </div>
);

export default ImageGrid;