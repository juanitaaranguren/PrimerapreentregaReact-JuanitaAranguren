import React, { useState } from "react";
import DestinoMotoButton from "../componentes/DestinoMotoButton";
import ItemListContainer from "../componentes/ItemListContainer";

function Home() {
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const handleCategoriaClick = () => {
    setMostrarBoton(false);
  };

  return (
    <div>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
        }}
      >
        Las motos son lo más cercano a volar estando en la tierra
      </p>

      {mostrarBoton && <DestinoMotoButton />}

      <ItemListContainer greeting="¡Explora nuestras motos!" />

    </div>
  );
}

export default Home;
