import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topleft } from "../../Components/Topleft/Topleft";
import "./Profile.css";

export function Profile(){

    return(

    <div className="all-profile">

        {/* puxando o components "Topleft" */}

        <div className="topleft-profile">
            <Topleft />
        </div> 

        {/* puxando o components "Sidebar" */}

        <div className="sidebar-profile">
            <Sidebar />
        </div>

        {/* crie seu codigo a partir daqui */}






        

    </div>

    )

}