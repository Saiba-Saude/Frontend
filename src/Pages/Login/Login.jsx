import "./Login.css";


export function Login() {

  function entrar() {
    console.log("Entrou!");
  }

  return (

    <div className="tudo">

      <img src="/logop.png" className="logol" />



      <form className ="form">

        <h1 className="title" >Bem-Vindo:</h1>
        <br />

        <input
          className="cardsus"
          id="cartao"
          type="text"
          placeholder="Cartão do SUS"

        />

        <br />
        <br />

        <input
          className="pass"
          id="Senha"
          type="password"
          placeholder="Senha"

        />

        <br />

        <a href="#" className="create">Criar conta?</a>
        <a href="#" className="remember">Esqueci a senha</a>


      </form>

      <br />

      <button className="enter" type="submit" onClick={entrar}>Entrar</button>

      <div className="boxf"></div>


    </div>


  );
}
