import React from "react";

function TarjetaDePerfil({ usuario }) {
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      margin: "10px auto",
      textAlign: "center"
    }}>
      <h2>{usuario.nombre}</h2>
      <p><strong>Profesión:</strong> {usuario.profesion}</p>
      <p><strong>Edad:</strong> {usuario.edad}</p>
    </div>
  );
}

export default TarjetaDePerfil;
