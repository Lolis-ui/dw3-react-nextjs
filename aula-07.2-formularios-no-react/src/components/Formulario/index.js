import { useState } from "react";

const Formulario = () => {
  // Criando os estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função que trata a submissão do formulário
  const handleSubmit = (evento) => {
    // Evitando o comportamento padrão do formulário que é ser recarregado
    evento.preventDefault();

    console.log("O formulário foi enviado!");
    console.log(nome, email, senha)
  };

  return (
    <>
      <h1>Cadastro de usuário</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          // Quando o valor do input mudar, pegue o novo valor (evento.target.value) e atualize o estado com esse valor.
          onChange={(evento) => setNome(evento.target.value)}
          value={nome}
        />
        <br />
        <input
          type="email"
          placeholder="Digite seu email..."
          onChange={(evento) => setEmail(evento.target.value)}
          value={email}
        />
        <br />
        <input
          type="password"
          placeholder="Digite sua senha..."
          onChange={(evento) => setSenha(evento.target.value)}
          value={senha}
        />
        <br />
        <br />
        <button type="submit">Cadastrar</button>
        <br />
        <br />
      </form>
      <h4>Chamando os estados para enxergar seus valores:</h4>
      <p>{nome}</p>
      <p>{email}</p>
      <p>{senha}</p>
    </>
  );
};

export default Formulario;
