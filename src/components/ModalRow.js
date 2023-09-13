import React from 'react';
import ModalImage from './ModalImage';

function ModalRow(props) {
  return (
    <div className='row'>
      {props.images.map((image, index) => (
        <ModalImage key={index} image={image} />
      ))}
    </div>
  );
}

export default ModalRow;
