import Cabecera from "./CabeceraCV";
import Perfil from "./Perfil";
import Educacion from "./Educacion";
import Experiencia from "./Experiencia";
import Foto from "./Foto";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Cabecera />
      <Perfil />
      <Educacion />
      <Experiencia />
      <Foto />
    </div>
);
}