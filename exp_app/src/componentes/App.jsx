import Cabecera from "./CabeceraCV";
import Perfil from "./Perfil";
import Educacion from "./Educacion";
import Experiencia from "./Experiencia";
import Foto from "./Foto";
import StackTecnologias from "./StackTecnologias";
import {cvData} from "./cvData"
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Cabecera
      nombre={cvData.nombre}
      cargo={cvData.cargo}
      ciudad={cvData.ciudad}
      contacto={cvData.contacto}
      />

      <Perfil yo={cvData.perfil} />

      <Experiencia experiencias={cvData.experiencia} />

      <Educacion estudios={cvData.educacion} />

      <StackTecnologias tecnologias={cvData.tecnologias} />

      <Foto foto={cvData.foto} />
    </div>
  );
}