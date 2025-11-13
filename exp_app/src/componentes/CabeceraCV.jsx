import React from "react";

function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <section>
      <h1>{nombre}</h1>
      <p>{cargo}</p>
      <p>{ciudad}</p>
      <p>{contacto}</p>
    </section>
  );
}

export default CabeceraCV;

