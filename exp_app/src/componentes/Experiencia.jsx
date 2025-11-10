function Experiencia() {
  const experiencias = [
    { cargo: "Desarrollador Front-End", empresa: "SENA", año: 2025, descripcion: "Desarrollo de componentes en React." },
    { cargo: "Diseñador UI", empresa: "SENA", año: 2025, descripcion: "Diseño de prototipos en Figma." },
    { cargo: "Auxiliar de Software", empresa: "SENA", año: 2025, descripcion: "Apoyo en proyectos Node.js." },
    { cargo: "Practicante de Sistemas", empresa: "SENA", año: 2025, descripcion: "Documentación de procesos técnicos." },
    { cargo: "Soporte Técnico", empresa: "SENA", año: 2025, descripcion: "Atención y resolución de incidentes." },
    { cargo: "Diseñador Web", empresa: "SENA", año: 2025, descripcion: "Maquetación de sitios web HTML/CSS." },
    { cargo: "Desarrollador React", empresa: "SENA", año: 2025, descripcion: "Implementación de interfaces modernas." },
    { cargo: "Analista Junior", empresa: "SENA", año: 2025, descripcion: "Análisis de requerimientos de software." },
    { cargo: "Tutor Tecnológico", empresa: "SENA", año: 2025, descripcion: "Apoyo en formación digital." },
    { cargo: "Voluntario Tech", empresa: "SENA", año: 2025, descripcion: "Charlas sobre desarrollo web." }
  ];

  return (
    <div>
      <section>
        <h2>Experiencia</h2>
        {experiencias.map((exp) => (
          <div style={{ marginBottom: "10px" }}>
            <strong>{exp.cargo}</strong> - {exp.empresa} ({exp.año})<br />
            <em>{exp.descripcion}</em>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Experiencia;