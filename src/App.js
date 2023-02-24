
import "./App.css"
import { useEffect, useState } from "react";
import Boton from "./componentes/boton/Boton";

function App() {
 let [valorActual, SetContador] = useState(0)
 let [auto, SetAuto] = useState(false)
  function manexoClickAumento() {
  let novoValor = valorActual+1
  SetContador(novoValor)
 }
 function manexoClickDecremento() {
  let novoValor = valorActual-1
  SetContador(novoValor) 
 }
 function reset() {
  SetContador(0)
  SetAuto(false)
 }
 function manexoClickAuto () {
  if (auto === true) 
  SetAuto(false);  else if (auto === false) SetAuto(true) 
 }
 useEffect (
  ()=>{let codigoTemporizador
    if (auto) { codigoTemporizador = setTimeout (manexoClickAumento,1000)}
    return ()=> {clearTimeout(codigoTemporizador)}
  }, 
  [auto,valorActual]
  )
 
 

 
  return (
    <>
    <h1>MEGACONTADOR</h1>
    <p>{valorActual}</p>
    <Boton texto="Aumenta o contador" operacion={manexoClickAumento}></Boton>
    <Boton texto="Disminúe o contador" operacion={manexoClickDecremento}></Boton>
    <Boton texto="Reset" operacion={reset}></Boton>
    <Boton texto=">||" operacion={manexoClickAuto}></Boton>
    </>
    
  );
}

export default App;
