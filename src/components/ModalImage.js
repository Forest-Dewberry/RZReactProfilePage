// ModalImage.js
import React from 'react';

function ModalImage(props) {
  return (
    <div className="col-3 p-2">
      <a href={`src/img/helicopters/${props.image}`}>
        <img src={`src/img/helicopters/${props.image}`} width="100%" alt="" />
      </a>
    </div>
  );
}

export default ModalImage;