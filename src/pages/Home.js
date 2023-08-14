import React, { useState } from "react";
import DestinoMotoButton from "../DestinoMotoButton";
import ItemListContainer from "../ItemListContainer";



function Home() {

    
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const handleCategoriaClick = () => {
    setMostrarBoton(false);
  };

  return (
    <div>
   <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333", textAlign: "center" }}>
  Las motos son lo más cercano a volar estando en la tierra
</p>

      {mostrarBoton && <DestinoMotoButton />}
      
     
    
    </div>
  );
}

export default Home;

