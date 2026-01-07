import "./Warning.css";


export function Warnig ({titlle, text}){

    return (

        <div className="box-warning">

            <h1 className="t1-warning">{titlle}</h1>

            <p className="p-warning">{text}</p>

            <button type="button" className="b-warning">Saiba mais</button>
                
        </div>

    )
}