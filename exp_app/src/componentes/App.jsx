import Header from "./CabeceraCV";
import About from "./Perfil";
import Skills from "./Educacion";
import Contact from "./Experiencia";
import Foto from "./Foto";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Contact />
      <Foto />
    </div>
);
}