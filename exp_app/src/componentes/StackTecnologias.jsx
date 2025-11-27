function StackTecnologias({ tecnologias }) {

    return (
        <section>
            <h1>Stack de Tecnologías</h1>

            {tecnologias.map((tec, index) => (
                <span className="tec-tag" key={index} style={{ marginRight: "10px" }}>
                    {tec}
                </span>
            ))}
        </section>
    );
}

export default StackTecnologias;