import React from "react";

import "../style/adresse.scss";

const Adresse = () => {
  return (
    <div className="map-fluid">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9380469263606!2d2.338223977190418!3d48.84032040197708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671c19bc20983%3A0x7d33812382ca3f6a!2s283%20Rue%20Saint-Jacques%2C%2075005%20Paris!5e0!3m2!1sfr!2sfr!4v1711641336918!5m2!1sfr!2sfr"
        allowFullScreen
        loading={"lazy"}
        referrerPolicy={`no-referrer-when-downgrade`}
      ></iframe>
    </div>
  );
};

export default Adresse;
