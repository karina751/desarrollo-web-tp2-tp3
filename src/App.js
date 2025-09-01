import React, { useState } from "react";
import Titulo from "./components/Titulo";
import TarjetaDePerfil from "./components/TarjetaDePerfil";
import ListaDeHabilidades from "./components/ListaDeHabilidades";

function App() {
  const usuario = {
    nombre: "Karina Bravo",
    profesion: "Estudiante de la carrera de Analista de Sistemas",
    edad: 36
  };

  
  const [mostrarLista, setMostrarLista] = useState(true);

  
  const toggleLista = () => {
    setMostrarLista(!mostrarLista);
  };

  
  const habilidades = ["Phyton", "JavaScript", "HTML", "CSS"];

  return (
    <div>
      <Titulo />
      <TarjetaDePerfil usuario={usuario} />

      
      <button onClick={toggleLista}>
        {mostrarLista ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

    
      {mostrarLista && <ListaDeHabilidades habilidades={habilidades} />}
    </div>
  );
}

export default App;
