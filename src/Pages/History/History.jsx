import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topleft } from "../../Components/Topleft/Topleft";
import "./History.css";

export function History (){
    
    return (

        <div className="all-usb">


            <div className="sidebar-usb"> 
            <Topleft />
            </div>

            <div className="sidebar-usb">
                <Sidebar />
            </div>


        </div>
    )

}