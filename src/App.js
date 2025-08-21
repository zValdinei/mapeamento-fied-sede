import React, { useState } from "react";
import BotaoInterativo from "./components/BotaoInterativo";
import "./App.css";

function App() {
  const [nomes, setNomes] = useState([
    ["Allana Souza", "Gabriel", null, null, "Jennifer"],
    ["Vitoria Oliveira", "Maria Beatriz", null, "Raiane", "Dalila"],
    ["Karla Morais", "Antonio F.", null, "Valter", "Erivaldo"],
    ["Antonio L.", "Biatriz Sandes", null, "Eduarda", "Tainá Rocha"],
    ["Beatriz Mesquita", "Fernanda L.", null, "Lara Kezia", "Sofhia"],
    ["Maria Clara", "Lana Evelin", null, "Claudio G.", "Valdinei"],
    ["Marcos Vinicius", "Letícia M.", null, "Grazy", "Victor Berlink"],
    ["Maria Talia", "Alex Alves", null, "Heloiza", "Noara B."],
    ["Thais Feitosa", "Ketlyn Melo", null, "Valeria", "Vitoria Silva"],
    ["Vitoria Braga", "Taissa", null, "Lavinia", "João Filho"],
    ["Marlon", "Mariana Barroso", "Zé Davi", "Francislayne", "Matheus Barreto"],
  ]);

  const [nomes2, setNomes2] = useState([
    ["Lucelia", "Ana Julia", "Maria Laiane", "Leticia de Oliveira", "Diênnifer"],
    ["Ana Gabriele", "Fernanda Eduarda", "Heloísa", "Jessica Martins", "Julia de Andrade"],
    ["Thalia Araujo", "Pablo Augusto", "Kauê", "Gabriel de Lima", "Ronaldo Wendel"],
    ["Vitor Farias", "Richardson Sousa"]
  ]);

  const [nomes3, setNomes3] = useState([
    ["Maria Luiza", "Kailane Marinho", "Clecia Xavier", "Fábio F.", "Aloisio Morais"],
    ["Eduarda Araujo", "Rogiane", "Edite"]
  ]);

  const [dragInfo, setDragInfo] = useState(null);

  const handleDragStart = (grupo, row, col) => {
    setDragInfo({ grupo, row, col });
  };

  const handleDrop = (grupo, row, col) => {
    if (!dragInfo) return;

    const getSetState = (grupo) => {
      if (grupo === "nomes") return [nomes, setNomes];
      if (grupo === "nomes2") return [nomes2, setNomes2];
      if (grupo === "nomes3") return [nomes3, setNomes3];
    };

    const [listaOrig, setListaOrig] = getSetState(dragInfo.grupo);
    const [listaDest, setListaDest] = getSetState(grupo);

    // evita trocar com corredores
    if (listaDest[row][col] === null) return;

    // copia listas
    const novaOrig = listaOrig.map((l) => [...l]);
    const novaDest = listaDest.map((l) => [...l]);

    // swap nomes
    const temp = novaOrig[dragInfo.row][dragInfo.col];
    novaOrig[dragInfo.row][dragInfo.col] = novaDest[row][col];
    novaDest[row][col] = temp;

    // salva estados
    setListaOrig(novaOrig);
    setListaDest(novaDest);

    setDragInfo(null);
  };

  const renderGrid = (grupoNome, lista) => (
    <div className="sala">
      {lista.map((linha, i) =>
        linha.map((nome, j) => (
          <div key={`${grupoNome}-${i}-${j}`} className="celula">
            {nome ? (
              <div
                draggable
                onDragStart={() => handleDragStart(grupoNome, i, j)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(grupoNome, i, j)}
              >
                <BotaoInterativo className="estilo_butao" nome={nome} />
              </div>
            ) : (
              <div className="corredor"></div>
            )}
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Acentos - FIED SEDE</h1>

        <h3>Corredor</h3>
        {renderGrid("nomes", nomes)}

        <h3 class="novatos">Novatos</h3>
        {renderGrid("nomes2", nomes2)}

        <h3>1º Semestre</h3>
        {renderGrid("nomes3", nomes3)}
      </header>
    </div>
  );
}

export default App;