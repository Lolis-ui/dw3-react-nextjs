//Importando o hook useState do React: permite criar estados para componentes
import { useState } from "react";

const Contador = () => {
    //Criando um estado para um componente
    //contagem: nome do estado
    //setContagem: função para atualizar o estado
    //useState(0): valor inicial do estado é 0
    const [contador, setContador] = useState(0);

    return (
        <>
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => {setContador(contador + 1)}}>Incrementar</button>
        </div>
        </>
    )
}
export default Contador;