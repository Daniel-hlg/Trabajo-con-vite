import { cvData } from "./cvData";
function Habilidades() {
    return (
        <ul>
            {cvData.habilidades.map((h, index) => (
                <li key={index}>{h}</li>
            ))}
        </ul>
    );
}

export default Habilidades;