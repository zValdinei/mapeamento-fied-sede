import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BotaoInterativo from './components/BotaoInterativo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Acentos</h1>
        <table>
        <tr>
          <td><BotaoInterativo className="estilo_butao" nome="Biatriz Sandes" /></td>
          <td><BotaoInterativo className="estilo_butao" nome="Brenda" /></td>
          <td>Corredor</td>
          <td><BotaoInterativo className="estilo_butao"nome="Vazio"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Jennifer"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Vitoria Oliveira"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Erivaldo"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Raiane M."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Dalila"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Karla Morais"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Antonio F."/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Beatriz"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Valter"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Antonio L."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Vitoria Silva"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Eduarda F."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Tainá Rocha"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Beatriz Mesquita"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Fernanda"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Claúdio G."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Allana Souza"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Maria Clara"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Lana Evelin"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Lara Kérzia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Sofhia"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Marcos Vinicius"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Letícia M."/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Graziely"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Victor Berlink"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Maria Talia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Thais"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Heloiza"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Noara B."/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Luiza Oliveira"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Gabriel Costa"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Valéria"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Valdinei"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Vitorya Braga"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Taissa"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Lavinia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="João Filho"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Zé Davi"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Mariana Barroso"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Marlon"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Francislayne"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Matheus Barreto"/></td>
        </tr>
        </table>
        <div>
    </div>
    
      </header>
    </div>
  );
}

export default App;
