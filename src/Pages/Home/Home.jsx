import "./Home.css";
import { Alert } from "../../Components/Alert/Alert";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export function Home(){

    return (
        <div className="all-home">

            <img src="../images/Umbrelladoctor.png" className="UmbrellaDoctor" />
            

            <div className="alert-home"> <Alert titlle="Vacinação contra: Gripe, Chikungunya, Febre Amarela, Sarampo" 
                text="Proteção para todas as fases! Das primeiras vacinas até a adolescência: vacinar é cuidar. Campanha aberta para menores de 18 anos. Proteja-se!"
                />
                
            </div>


                <h1 className="h1-home">
                    Como podemos te 
                    <br/>
                   ajudar hoje?
                </h1>

            <div className="sidebar-home">
                <Sidebar />
            </div>

        <div className="box-home2"></div>

        </div>

    );
}
