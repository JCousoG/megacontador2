
import "./App.css"
import { useState } from "react";
import Boton from "./componentes/boton/Boton";

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
    <>
    <h1>MEGACONTADOR</h1>
    <p>{contador}</p>
    <Boton texto="Aumenta o contador" operacion={manexoClickAumento}></Boton>
    <Boton texto="Disminúe o contador" operacion={manexoClikDecremento}></Boton>
    </>
    
  );
}

export default App;
