import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topleft } from "../../Components/Topleft/Topleft";
import "./USB.css";

export function USB (){
    
    return (

        <div className="all-usb">

            <Topleft />

            <div className="sidebar-usb">
                <Sidebar />
            </div>
            <div className="info-usb">

               <h1 className="h1-usb">em desenvolvimento</h1>
               
            
            <div className="box-usb"> <h1>USF ALTO DO CÉU</h1>

                <p className="info-p">
                Endereço: Rua Ponta Grossa - Vila Rural - Igarassu <br/><br/>

                Bairro: Vila Rural<br/><br/>

                Cidade: Igarassu<br/><br/>

                Funcionamento: 08:00 às 16:00<br/><br/>

                Telefone:  81 3543-1772 <br/><br/>

                Maps:<a> href="https://www.google.com/maps?ll=-7.812155,-34.927879&z=15&t=m&hl=pt-BR&gl=US&mapclient=embed&q=Vila+Rural+Igarassu+-+PE"</a>
 </p></div>
                </div>
            <div className="box1-usb"></div>


        </div>

    )

}