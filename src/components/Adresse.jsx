import React, { useState, useEffect } from "react";

import "../style/adresse.scss";

const Adresse = () => {
  return (
    <div className="map-fluid">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.628252158641!2d2.439348577190645!3d48.84622920156136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672a4fc3f4c01%3A0x44b3dd7f4c669a52!2s23%20Av.%20Foch%2C%2094300%20Vincennes!5e0!3m2!1sfr!2sfr!4v1709571443793!5m2!1sfr!2sfr"
        allowFullScreen
        loading={"lazy"}
        referrerPolicy={`no-referrer-when-downgrade`}
      ></iframe>
    </div>
  );
};

export default Adresse;
