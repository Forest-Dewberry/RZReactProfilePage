import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function FlightTimeModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Flight Time Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h4>Marine Corps</h4>
              <p>1000+ Hours</p>
            </div>
            <div className="col">
              <h4>DoS|DoD Support</h4>
              <p>800+ Hours</p>
            </div>
            <div className="col">
              <h4>Pilot: Fixed & Rotor</h4>
              <p>400+ hours</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FlightTimeModal;