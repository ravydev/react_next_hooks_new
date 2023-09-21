import { useState } from "react"

export default () => {

    const [valor, setValor] = useState(0);

    function diminuir() {setValor(valor => valor - 1)}
    function aumentar() {setValor(valor => valor + 1)}

    return(
        <>
            <h4>UseState</h4>
            <p>Valor: {valor}</p>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}