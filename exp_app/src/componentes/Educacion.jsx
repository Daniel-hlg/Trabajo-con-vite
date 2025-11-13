import React from "react";

function Educacion({ estudios }) {
  return (
    <section>
      <h1>Educación</h1>
      <ul>
        {estudios.map((educacion, index) => (
          <li key={index}>
            <strong>{educacion.curso}</strong> - {educacion.institucion} ({educacion.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
