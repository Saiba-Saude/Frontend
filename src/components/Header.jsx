import "./Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Saiba+Saúde" className="nav-logo" />

      <div className="Nav-botoes">
        <button className="botao-cadastro">Cadastrar</button>
        <button className="botao-login">Entrar</button>
      </div>
    
    </header>
  );
};

export default Header;