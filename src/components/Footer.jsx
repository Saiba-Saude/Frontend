import "./Footer.css";
import Logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <img src={Logo} alt="Logo Saiba+Saúde" className="nav-logo1" />
        {/* COLUNA 1 */}
        <div className="footer-col brand">
          
          <p>Igarassu, Pernambuco</p>
          <p>+55 81 9296-5791</p>
          <p>contato@saibamaisaude.com</p>

          <div className="socials">
            <span>A</span>
            <span>J</span>
            <span>U</span>
            <span>D</span>
            <span>E</span>

          </div>
        </div>

        {/* COLUNA 2 */}
        <div className="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li>Time DEV</li>
            <li>Galeria</li>
            <li>Contato</li>
            <li>Rede</li>
          </ul>
        </div>

        {/* COLUNA 3 */}
        <div className="footer-col">
          <h4>Serviços</h4>
          <ul>
            <li>Agendamento</li>
            <li>Unidades</li>
            <li>Avaliação</li>
            <li>Direitos</li>
          </ul>
        </div>

        {/* COLUNA 4 */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Quem Somos</li>
            <li>Serviços</li>
            <li>Objetivos</li>
            <li>Politica de Privacidade</li>
          </ul>
        </div>

      </div>

      {/* BARRA FINAL */}
      <div className="footer-bottom">
        <span>© 2025 Saiba+Saúde — Todos os direitos reservados</span>
        <span>Design by Alunos START 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
