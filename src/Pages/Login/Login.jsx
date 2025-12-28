import "./Login.css";



function Componente1() {

  function entrar() {
    console.log("Entrou!");
  }

  return (

    <div id="tudo">

      <img src="/logop.png" id="logo" />



      <form id="form">

        <h1>Bem-Vindo:</h1>
        <br />

        <input
          id="cartao"
          type="text"
          placeholder="Cartão do SUS"

        />

        <br />
        <br />

        <input
          id="Senha"
          type="password"
          placeholder="Senha"

        />

        <br />

        <a href="#" id="link1">Criar conta?</a>
        <a href="#" id="link2">Esqueci a senha</a>


      </form>

      <br />

      <button type="submit" onClick={entrar}>Entrar</button>

      <div id="box"></div>


    </div>


  );
}

export default Componente1;