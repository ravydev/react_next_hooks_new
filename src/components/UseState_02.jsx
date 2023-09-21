import { useState } from "react"

export default () => {

    return(
        <>
            <h4>UseState</h4>
            <p>Valor: {valor}</p>
            <button onClick={() => diminuir_valor(10)}>Diminuir +</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}