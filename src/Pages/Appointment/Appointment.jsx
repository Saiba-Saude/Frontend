import "./Appointment.css";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export function Appointment (){

    const navigation = useNavigate();

    return (

        <div className="all-appointment">


            {/* <h1 className="t1-appointment">Faça seu agendamento online:</h1> */}
        
            <div className="sidebar-appointment">
                <Sidebar />
            </div>
            
            <div className="form-appointment">

                <h1>Agende:</h1>


                <label className="label-appointment">Unidade</label>

                <select className="select-appointment">

                    <option value="">Selecione...</option>
                    <option value="USF Agamenon Magalhães II">USF Agamenon Magalhães II</option>
                    <option value="USF Ana Albuquerque">USF Ana Albuquerque</option>
                    <option value="USF Beira Mar II">USF Beira Mar II</option>
                    <option value="USF Bela Vista">USF Bela Vista</option>
                    <option value="USF Boa Sorte">USF Boa Sorte</option>
                    <option value="USF Do Monta">USF Do Monta</option>
                    <option value="USF Encanto Igarassu">USF Encanto Igarassu</option>
                    <option value="USF Inhama">USF Inhama</option>
                    <option value="USF Jerônimo Cavalcante Júnior">USF Jerônimo Cavalcante Júnior</option>
                    <option value="USF Lot. N. Sra. da Conceição">USF Lot. N. Sra. da Conceição</option>
                    <option value="USF Magda Costa">USF Magda Costa</option>
                    <option value="USF Manancial">USF Manancial</option>
                    <option value="USF N. Sra. de Fátima">USF N. Sra. de Fátima</option>
                    <option value="USF Redenção">USF Redenção</option>
                    <option value="USF Sandra Rufino">USF Sandra Rufino</option>
                    <option value="USF Santa Cruz I">USF Santa Cruz I</option>
                    <option value="USF Sítio Lira">USF Sítio Lira</option>
                    <option value="USF Tabatinga">USF Tabatinga</option>
                    <option value="USF Três Ladeiras">USF Três Ladeiras</option>
                    <option value="EAP Residencial Santo Antônio">EAP Residencial Santo Antônio</option>
                    <option value="EAP Tabuleiro">EAP Tabuleiro</option>
                    <option value="Policlínica São Lucas">Policlínica São Lucas</option>

                </select>

                <label className="label-appointment">Data</label>
                <input type="date" className="input-appointment"/>

                <label className="label-appointment">Hórario</label>
                <input type="time" className="input-appointment"/>

                <label className="label-appointment">Tipo de Consulta</label>
                <select className="select-appointment">

                    <option value="">Selecione o serviço...</option>
                    <option value="consulta_medica">Consulta Médica (Clínico Geral)</option>
                    <option value="enfermagem">Atendimento de Enfermagem</option>
                    <option value="odontologia">Atendimento Odontológico</option>
                    <option value="vacinacao">Vacinação</option>
                    <option value="pre_natal">Pré-Natal</option>
                    <option value="prevencao_citopatologico">Prevenção</option>
                    <option value="puericultura">Puericultura (Saúde da Criança)</option>
                    <option value="hiperdia">Acompanhamento (Hipertensão/Diabetes)</option>
                    <option value="curativos">Curativos e Procedimentos</option>
                    <option value="farmacia">Retirada de Medicamentos</option>
                    <option value="visita_domiciliar">Solicitação de Visita Domiciliar</option>

                </select>

                     <button type="submit" className="b-appointment" onClick={() => navigation("/finish")}>Confirmar</button>
            </div>

            <div className="status-appointment">
                <h1>Acompanhe: </h1>

                <span></span>

            </div>

            <div className="box-appointment2"></div>
            <div className="box-appointment"></div>
            <div className="box1-appointment"></div>
            <div className="box2-appointment"></div>
           
        </div>



    )
}