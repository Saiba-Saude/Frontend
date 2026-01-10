import { useNavigate } from "react-router-dom"; // 1. Importe o hook
import "./Finish.css";

export function Finish() {
  const navigate = useNavigate(); // 2. Inicialize o navigate

  const handleGoBack = () => {
    navigate(-1); // 3. O valor -1 indica "voltar uma página no histórico"
  };

  return (
    <div>
      <h1 className="h1-finish">AGENDAMENTO FINALIZADO!</h1>

      <img 
        src="../images/correto.webp" 
        className="correto-finish" 
        onClick={handleGoBack} // 4. Adicione o evento de clique
        style={{ cursor: 'pointer' }} // Dica: muda o mouse para a "mãozinha"
        alt="Sucesso"
      />
    </div>
  );
}