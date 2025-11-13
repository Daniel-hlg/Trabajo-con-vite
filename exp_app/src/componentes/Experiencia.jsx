import React from "react";

function Experiencia({ experiencias }) {
  return (
    <section>
      <h1>Experiencias</h1>
      {experiencias.map((xp) => (
        <div style={{ marginBottom: "10px" }}>
          <strong>{xp.cargo}</strong> - {xp.empresa} ({xp.año})<br />
          <em>{xp.descripcion}</em>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
