
import "./App.css"
import { useEffect, useState } from "react";
import Boton from "./componentes/boton/Boton";

function App() {
 let [Contador, SetContador] = useState(0)
 let [auto, SetAuto] = useState(false)
 let [incremento, setIncremento] = useState(1)
 function manexoClickBidireccional() {
  let novoValor = Contador+incremento
  SetContador(novoValor)
 }
   function manexoClickAumento() {
  let novoValor = Contador+1
  SetContador(novoValor)
 }
 function manexoClickDecremento() {
  let novoValor = Contador-1
  SetContador(novoValor) 
 }
 function reset() {
  SetContador(0)
  SetAuto(false)
 }
 function manexoClickAuto () {
  setIncremento(1)
  SetAuto(!auto)
 }
 useEffect (
  ()=>{let codigoTemporizador
    if (auto) { codigoTemporizador = setTimeout (manexoClickBidireccional,1000)}
    return ()=> {clearTimeout(codigoTemporizador)}
  }, 
  [auto,Contador]
  )
  function contaAtras () {
    setIncremento(-1)
    SetAuto(!auto)
   }

 
 

 
  return (
    <>
    <h1>MEGACONTADOR</h1>
    <p className={Contador<0 ? "roxo" : "negro"}> {Contador}</p>
    <div id="boton"> 
    <Boton texto="Aumenta o contador" operacion={manexoClickAumento}></Boton>
    <Boton texto="Disminúe o contador" operacion={manexoClickDecremento}></Boton>
    <Boton texto="Reset" operacion={reset}></Boton>
    <Boton texto=">||" operacion={manexoClickAuto}></Boton>
    <Boton texto="<||" operacion={contaAtras}></Boton>
    </div>
    </>
    
  );
}

export default App;
