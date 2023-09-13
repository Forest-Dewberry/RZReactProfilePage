// CertRow.js
import React from 'react';
import Cert from './Cert';

const CertRow = ({ certs }) => (
  <div className="row">
    {certs.map((cert, index) => (
      <Cert key={index} imgSrc={cert.imgSrc} altText={cert.altText} />
    ))}
  </div>
);

export default CertRow;