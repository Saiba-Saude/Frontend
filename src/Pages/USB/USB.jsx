import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topleft } from "../../Components/Topleft/Topleft";
import "./USB.css";

export function USB(){

    return (

    <div className="all-usb">

        {/* puxando o components "Topleft" */}

        <div className="topleft-usb">
            <Topleft />
        </div> 

        {/* puxando o components "Sidebar" */}

        <div className="sidebar-usb">
            <Sidebar />
        </div>
        

    </div>

    )

}