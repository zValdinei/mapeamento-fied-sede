import React, { useState } from "react";

function BotaoInterativo({ estilo_butao, nome,...props }) {
  const [cor, setCor] = useState("#03d92d");
  const trocaCor = () => {
    setCor((prevCor) => (prevCor === "#03d92d" ? "#cd1406" : "#03d92d"));
  };

  return (
    <button
      {...props}
      className={estilo_butao}
      onClick={trocaCor}
      style={{
        backgroundColor: cor,
        color: "white",
        padding: "5px 10px",
        fontSize: "12px",
        border: "none",
        borderRadius: "2px",
        cursor: "pointer",
        transition: "0.3s",
        width: "19vmin",
        height: "10vmin"
        
      }}
    >
      {nome}
    </button>
  );
}

export default BotaoInterativo;