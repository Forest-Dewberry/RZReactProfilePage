// Modal.js
import React from 'react';
import ImageGrid from './imageGrid';

const Modal = ({ id, title, imageGrids }) => (
  <div id={id} className="modal fade" role="dialog">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button type="button" className="close btn btn-danger" data-bs-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            {imageGrids.map((images, index) => <ImageGrid key={index} images={images} />)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;