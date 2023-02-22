
import "./App.css"
import { useState } from "react";

function App() {
 let [contador, SetContador] = useState(0)
  function manexoClickAumento() {
  let novoValor = contador+1
  SetContador(novoValor)
 }
 function manexoClikDecremento() {
  let novoValor = contador-1
  SetContador(novoValor) 
 }


 
  return (
    <div id="boton">
    <p>{contador}</p>
    <button onClick={manexoClickAumento} >Aumenta o contador</button>
    <button onClick={manexoClikDecremento}>Disminúe o contador</button>
    </div>
    
  );
}

export default App;
