import React from "react";

function ListaDeHabilidades({ habilidades }) {
  return (
    <div>
      <h3>Habilidades</h3>
      {
        habilidades.length > 0 
        ? (
          <ul>
            {habilidades.map((habilidad, index) => (
              <li key={index}>{habilidad}</li>
            ))}
          </ul>
        )
        : <p>No hay habilidades</p>
      }
    </div>
  );
}

export default ListaDeHabilidades;
