import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {

    const [nuevaTec, setNuevaTec] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaTec.trim() === "") return;
        agregarTecnologia(nuevaTec);
        setNuevaTec("");
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input className="input-soft"
                    type="text"
                    placeholder="Agregar tecnología"
                    value={nuevaTec}
                    onChange={(e) => setNuevaTec(e.target.value)}
                />
                <button className="btn-add" type="submit">Agregar</button>
            </form>
        </section>
    );
}

export default FormularioTecnologia;