// CertsModal.js
import React from 'react';
import CertRow from './CertRow';

const CertsModal = ({ certRows }) => (
  <div id="certsModal" className="modal fade" role="dialog">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Professional Certifications & Awards</h3>
          <button type="button" className="close btn btn-danger" data-bs-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            {certRows.map((certs, index) => (
              <CertRow key={index} certs={certs} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CertsModal;