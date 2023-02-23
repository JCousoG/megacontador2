import { useState } from "react";

function Boton ({texto, operacion}) {
    let [contador, SetContador] = useState(0)
   function manexoClick () {
    let novoValor = contador + 1
    SetContador(novoValor)
    operacion()
}
return (
   <div id="boton"> <button onClick={manexoClick}>{texto} ({contador})</button> </div>
)
}
export default Boton