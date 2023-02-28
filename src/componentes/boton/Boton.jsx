import { useState } from "react";

function Boton ({texto, operacion}) {
    let [contador, SetContador] = useState(0)
   function manexoClick () {
    let novoValor = contador + 1
    SetContador(novoValor)
    operacion()
}
return (
   <button onClick={manexoClick}>{texto} <span className="badge badge-light">{contador}</span></button>
)
}
export default Boton