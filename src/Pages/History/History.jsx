import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topleft } from "../../Components/Topleft/Topleft";
import "./History.css";

export function History(){
    
    return (

        <div className="all-usb">

             {/* puxando o components "Sidebar" */}

            <div className="sidebar-usb"> 
            <Topleft />
            </div>

             {/* puxando o components "Topleft" */}

            <div className="sidebar-usb">
                <Sidebar />
            </div>

             {/* crie seu codigo a partir daqui */}



             

        </div>
    )

}