
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
 let [aumento, SetAumento] = useState(0)
 function manexoAumento() {
  let novoValor = aumento+1
  SetAumento(novoValor)
  manexoClickAumento()
 }
 let [decremento, SetDecremento] = useState(0)
 function manexoDecremento () {
 let novoValor = decremento+1
 SetDecremento(novoValor)
 manexoClikDecremento()
 }

 
  return (
    <div id="boton">
    <p>{contador}</p>
    <button onClick={manexoAumento} >Aumenta o contador ({aumento})</button>
    <button onClick={manexoDecremento}>Disminúe o contador ({decremento})</button>
    </div>
    
  );
}

export default App;
