function Educacion() {
  const educacion = [
    {
      institucion: "I.E Alberto Diaz Muñoz",
      curso: "Bachiller Académico",
      año: 2024,
    },
    {
      institucion: "SENA - Centro de Tecnología de la Manufactura Avanzada (CTMA)",
      curso: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
      año: "2025 - 2027",
    },
    {
      institucion: "SENA",
      curso: "Inglés Nivel 1",
      año: 2025,
    },
    {
      institucion: "SENA",
      curso: "Inglés Nivel 2",
      año: 2025,
    },
  ];

  return (
    <div>
      <section>
        <h2>Educación</h2>
        <ul>
          {educacion.map((estudio, index) => (
            <li key={index}>
              <strong>{estudio.curso}</strong> - {estudio.institucion} ({estudio.año})
            </li>
          ))}
      </ul>
      </section>
    </div>
  );
}

export default Educacion;