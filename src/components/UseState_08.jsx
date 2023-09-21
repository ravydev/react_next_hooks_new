import React from "react";
import { useState } from "react";

export default () => {

    const tmp = {
            nome: "",
            apelido: "",
            cidade: "",
            email: ""    
    }


    const [cliente, setCliente] = useState(tmp)

    return (
        <>
            <h2>Exercicio 06</h2>
            <hr />
            <ul>
                <li>Nome:{cliente.nome}</li>
                <li>Apelido:{cliente.apelido}</li>
                <li>Cidade:{cliente.cidade}</li>
                <li>E-mail:{cliente.email}</li>
            </ul>
            <hr />
            <button onClick={() =>{
                const c = {...cliente}
                c.nome = "Ravy"
                setCliente(c)
            }}>Nome</button>

            <button onClick={() =>{
                const c = {...cliente}
                c.apelido = "Carvalho"
                setCliente(c)
            }}>Apelido</button>

            <button onClick={() =>{
                   const c = {...cliente}
                   c.cidade = "Lisboa"
                   setCliente(c)
            }}>Cidade</button>

            <button onClick={() =>{
                   const c = {...cliente}
                   c.email = "Carvalho@gmail.com"
                   setCliente(c)
            }}>Email</button>
        </>
    )
}