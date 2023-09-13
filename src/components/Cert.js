// Cert.js
import React from 'react';

const Cert = ({ imgSrc, altText }) => (
  <div className='col-4'>
    <a href={imgSrc}>
      <img src={imgSrc} width='100%' alt={altText} />
    </a>
  </div>
);

export default Cert;
