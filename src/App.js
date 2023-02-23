
import "./App.css"
import { useState } from "react";
import Boton from "./componentes/boton/Boton";

function App() {
 let [contador, SetContador] = useState(0)
  function manexoClickAumento() {
  let novoValor = contador+1
  SetContador(novoValor)
 }
 function manexoClickDecremento() {
  let novoValor = contador-1
  SetContador(novoValor) 
 }
 function reset() {
  SetContador(0)
 }

 
  return (
    <>
    <h1>MEGACONTADOR</h1>
    <p>{contador}</p>
    <Boton texto="Aumenta o contador" operacion={manexoClickAumento}></Boton>
    <Boton texto="Disminúe o contador" operacion={manexoClickDecremento}></Boton>
    <Boton texto="Reset" operacion={reset}></Boton>
    </>
    
  );
}

export default App;
