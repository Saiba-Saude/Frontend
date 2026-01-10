import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { PatientHistory } from "../../Components/PatientHistory/PatientHistory";
import "./History.css";

export function History() {
  return (
    <div className="all-history">

      <div className="history-layout">
        
        {/* Menu lateral */}
        <Sidebar />

        {/* Conteúdo principal */}
        <main className="history-content">
          <PatientHistory />
        </main>

      </div>
    </div>
  );
}
