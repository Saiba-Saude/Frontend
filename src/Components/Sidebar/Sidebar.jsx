import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Topleft } from "../Topleft/Topleft";


export function Sidebar() {

    const navigation = useNavigate();

    return (

        <div all-sidebar>

                <div className="logo-sidebar">
                    <Topleft />
                </div>

            <div className="buttons-sidebar">
                
                <button className="b-home" >Meu Perfil</button>
                <button className="b-home" onClick={() => navigation("campaign")}>Campanhas e Anúncios</button>
                <button className="b-home">Histórico Médico</button>
                <button className="b-home">Unidade de Saúde</button>
                <button className="b-home" onClick={() => navigation("appointment")}>Angendar Consulta</button>
                <button className="b-home">Configurações</button>
                <button className="b-home"onClick={() => navigation("/")}>Sair</button>

            </div>

        <div className="box-sidebar"></div>
            
        </div>

    )
}
