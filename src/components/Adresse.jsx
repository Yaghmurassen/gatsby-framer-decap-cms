import React from 'react';
import '../style/adresse.scss';

const Adresse = () => {
  return (
    <div className="map-fluid">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.765041432545!2d2.364282777329998!3d48.88175549906059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e7665caa9bd%3A0xabbe2a6dd092689f!2s212%20Rue%20La%20Fayette%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1716239246215!5m2!1sfr!2sfr"
        allowFullScreen
        loading={'lazy'}
        referrerPolicy={`no-referrer-when-downgrade`}
      ></iframe>
    </div>
  );
};

export default Adresse;
