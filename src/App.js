import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BotaoInterativo from './components/BotaoInterativo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Acentos - FIED SEDE</h1>
        <table>
        <tr>
          <td><BotaoInterativo className="estilo_butao" nome="Allana Souza" /></td>
          <td><BotaoInterativo className="estilo_butao" nome="Gabriel" /></td>
          <td>Corredor</td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Jennifer"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Vitoria Oliveira"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Maria Beatriz"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Raiane M."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Dalila"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Karla Morais"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Antonio F."/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Erivaldo"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Valter"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Antonio L."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Biatriz Sandes"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Eduarda F."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Tainá Rocha"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Beatriz Mesquita"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Fernanda Lopes"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Lara Kézia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Sofhia"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Maria Clara"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Lana Evelin"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Claudio G."/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Valdinei"/></td>
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
          <td><BotaoInterativo className="estilo_butao"nome="Henrique"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Valéria"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Vitoria Silva"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Vitoria Braga"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Taissa"/></td>
          <td></td>
          <td><BotaoInterativo className="estilo_butao"nome="Lavinia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="João Filho"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Marlon"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Mariana Barroso"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Zé Davi"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Francislayne"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Matheus Barreto"/></td>
        </tr>
        <h4>Novatos</h4>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Lucélia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Ana Júlia"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Maria Laiane"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Leticia de Oliveira"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Diêniffer"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Ana Gabriele"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Fenanda Eduarda"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Heloísa"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Jessica Martins"/></td>
          <td><BotaoInterativo className="estilo_butao"nome="Julia de Andrade"/></td>
        </tr>
        <tr>
          <td><BotaoInterativo className="estilo_butao"nome="Thalia Araujo"/></td>
        </tr>
        </table>
        <div>
    </div>
    
      </header>
    </div>
  );
}

export default App;
