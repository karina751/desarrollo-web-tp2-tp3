import React from "react";
import Titulo from "./components/Titulo";
import TarjetaDePerfil from "./components/TarjetaDePerfil";

function App() {
  const usuario = {
    nombre: "Karina Bravo",
    profesion: "Estudiante de Desarrollo Web",
    edad: 36
  };

  return (
    <div>
      <Titulo />
      <TarjetaDePerfil usuario={usuario} />
    </div>
  );
}

export default App;
