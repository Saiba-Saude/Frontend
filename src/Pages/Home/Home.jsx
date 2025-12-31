import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Alert } from "../../Components/Alert";


export function Home(){

   const navigation = useNavigate();

    return (
        <div className="all-home">

            <img src="/logo.png" className="logo-home" />
            <img src="/OnlineDoctor.png" className="onDoctor" />
            

            <div className="alert-home">
                <Alert titlle="Vacinação contra: Gripe, Chikungunya, Febre Amarela, Sarampo" 
                text="Proteção para todas as fases! Das primeiras vacinas até a adolescência: vacinar é cuidar. Campanha aberta para menores de 18 anos. Proteja-se!"
                />
                
            </div>


            <div className="title-home">

                <h1 className="h1-home">
                    Como podemos te 
                    <br/>
                   ajudar hoje?
                </h1>

            </div>


            <div className="buttons-home">
                
                <button className="b-home" >Meu Perfil</button>
                <button className="b-home" >Campanhas e Anúncios</button>
                <button className="b-home">Histórico Médico</button>
                <button className="b-home">Unidade de Saúde</button>
                <button className="b-home">Angendar Consulta</button>
                <button className="b-home">Configurações</button>
                <button className="b-home"onClick={() => navigation("/")}>Sair</button>

            </div>

        <div className="box-home1"></div>
        <div className="box-home2"></div>

        </div>

    );
}
