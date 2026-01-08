import { Alert } from "../../Components/Alert/Alert";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topleft } from "../../Components/Topleft/Topleft";
import { Warnig } from "../../Components/Warning/Warnig";
import "./Campaign.css";


export function Campaign (){

    return (

        <div className="all-campaign">

                {/* <h1 className="h1-campaign">
                    Informe-se:

                </h1> */}

        <div className="topleft-campaign">
            <Topleft />
        </div>

        <div className="sidebar-campaign">
            <Sidebar />
        </div>

        <div className="alert-campaign">
            <Alert titlle="Consultas odontológicas já disponíveis! Cuide da sua saúde bucal e inscreva-se abaixo."/>
        </div>

        <div className="warning-campaign">
            <Warnig titlle="Atenção! Serviços suspensos nesta sexta-feira." text="Nesta sexta-feira (09/01/2026) por motivos de falta de água estaremos sem serviços, pois a falta de água impossibilita a perfeita execução das funções nos delegadas."/>
        </div>


        <img src="../images/Onlineworld.png" className="image-campaign"></img>

        <div className="box-home2"></div>

        </div>


    )
}