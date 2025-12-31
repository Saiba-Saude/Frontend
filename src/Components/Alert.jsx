
import "./Alert.css";


export function Alert ({titlle, text}){

    return (

        <div className="box-alert">

            <h1 className="t1-alert">{titlle}</h1>

            <p className="p-alert">{text}</p>
                
            <button type="button" className="b-alert">Inscrever-se</button>
        </div>

    )
}