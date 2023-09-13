import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalRow from './ModalRow';

function PlatformModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Multi-Role Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <ModalRow images={props.images.slice(0, 4)} />
          <ModalRow images={props.images.slice(4, 8)} />
          <ModalRow images={props.images.slice(8, 12)} />
          <ModalRow images={props.images.slice(12, 16)} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PlatformModal;