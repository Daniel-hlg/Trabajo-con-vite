import { useState } from "react";
import Habilidades from "./Habilidades";

function ToggleHabilidades() {
    const [mostrar, setMostrar] = useState(true);

    return (
        <section>
            <button className="btn-soft" onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ocultar Habilidades" : "Ver Habilidades"}
            </button>

            {mostrar && <Habilidades />}
        </section>
    );
}

export default ToggleHabilidades;