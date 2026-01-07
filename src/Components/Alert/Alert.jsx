
import "./Alert.css";
import { useNavigate } from "react-router-dom";

export function Alert ({titlle, text}){

    const navigation = useNavigate();

    return (

        <div className="box-alert">

            <h1 className="t1-alert">{titlle}</h1>

            <p className="p-alert">{text}</p>
                
            <button type="button" className="b-alert" onClick={() => navigation("/appointment")} >Inscrever-se</button>
        </div>

    )
}