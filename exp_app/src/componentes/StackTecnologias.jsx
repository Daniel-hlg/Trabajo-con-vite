function StackTecnologias() {
  const tecnologias = [
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Vite",
  ];

  const getColor = (colores) => {   
    if (colores === "HTML") return "#E44D26";       
    if (colores === "CSS") return "#2965F1";                  
    if (colores === "Git") return "#F34F29";        
    if (colores === "GitHub") return "#333";        
    if (colores === "Vite") return "#646CFF";      
    return "#ccc";                             
  };

  return (
    <section>
      {tecnologias.map((colores, index) => (
        <span
          key={index}
          style={{
            backgroundColor: getColor(colores),
            color: colores === "JavaScript" ? "black" : "white",
            padding: "10px 12px",
            margin: "8px",
            borderRadius: "15px",
            display: "inline-block",
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