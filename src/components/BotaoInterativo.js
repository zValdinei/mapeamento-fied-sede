import React, {useState, useEffect } from "react";

function BotaoInterativo({ estilo_butao, nome,...props }) {
  const chaveLocalStorege = `botao-cor${nome}`
  const [cor, setCor] = useState("#cd1406");
  const trocaCor = () => {
    const novaCor = cor === "#cd1406" ? "#00b123ff" : "#cd1406"; 
    setCor(novaCor);
    localStorage.setItem(chaveLocalStorege, novaCor);
  };

  useEffect(() =>{
    const corSalva = localStorage.getItem(chaveLocalStorege);
    if (corSalva){
      setCor(corSalva);
    }
  }, [chaveLocalStorege])

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