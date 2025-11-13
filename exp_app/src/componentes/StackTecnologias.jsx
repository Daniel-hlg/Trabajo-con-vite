import React from "react";

function StackTecnologias({ tecnologias }) {
  const getColor = (color) => {
    if (color === "CSS") return "#61DBFB";
    if (color === "JavaScript") return "#f7921eff";
    if (color === "HTML") return "#E44D26";
    if (color === "ControlDeVersiones") return "#2965F1";
    if (color === "Vite") return "#b852b3ff";
  };

  return (
    <section>
      <h1>Tecnologias</h1>
      {tecnologias.map((colores) => (
        <span
          style={{
            backgroundColor: getColor(colores),
            color: colores === "JavaScript" ? "white" : "black",
            padding: "8px 12px",
            margin: "6px",
            borderRadius: "15px",
            fontWeight: "bold",
          }}
        >
          {colores}
        </span>
      ))}
    </section>
  );
}

export default StackTecnologias;
