import { useState } from "react";
import "./PatientHistory.css";

export function PatientHistory() {
  const [activeTab, setActiveTab] = useState("consultations");
  
  const consultations = [
    {
      id: "1",
      date: "22/03/2024",
      type: "Consulta de Rotina",
      doctor: "Dr. Carlos Mendes",
      specialty: "Clínico Geral",
      description: "Paciente apresenta pressão controlada. Manter medicação.",
      observations: "Retornar em 6 meses com novos exames de sangue.",
    },
    {
      id: "2",
      date: "10/01/2024",
      type: "Emergência",
      doctor: "Dra. Ana Julia",
      specialty: "Cardiologista",
      description: "Relato de palpitações leves. ECG realizado sem alterações.",
      observations: "Evitar cafeína por 15 dias.",
    }
  ];

  const exams = [
    {
      id: "1",
      name: "USF Do Monta",
      date: "20/03/2024",
      lab: "Prevenção",
      result: "normal",
      status: "Finalizado",
      fileUrl: "#" // Link para download do PDF
    },
    {
      id: "2",
      name: "Curativos e Procedimentos",
      date: "18/03/2024",
      lab: "USF Ana Albuquerque",
      result: "attention",
      status: "Pendente",
      fileUrl: "#"
    }
  ];

  return (
    <section className="history-section">

      <div className="bg-circle-decoration"></div>

      <div className="history-section-header">
        <h2 className="history-section-title">Histórico Médico</h2>
      </div>

      <div className="box3-register"></div>
            <div className="box4-register"></div>

      <div className="history-tabs">
        <button className={`history-tab ${activeTab === "consultations" ? "active" : ""}`} onClick={() => setActiveTab("consultations")}>Consultas</button>
        <button className={`history-tab ${activeTab === "exams" ? "active" : ""}`} onClick={() => setActiveTab("exams")}>Exames</button>
      </div>

      {activeTab === "consultations" && (
        <div className="timeline">
          {consultations.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header-info">
                  <span className="timeline-date">{item.date} • {item.time}</span>
                  <span className="timeline-location">{item.location}</span>
                </div>
                <div className="timeline-title">{item.type}</div>
                <div className="timeline-description">{item.description}</div>
                
                {/* Nova seção de observações adicionais */}
                <div className="timeline-observations">
                  <strong>Obs:</strong> {item.observations}
                </div>

                <div className="timeline-doctor">
                  {item.doctor} • <span>{item.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "exams" && (
        <div className="exam-list">
          {exams.map((item) => (
            <div key={item.id} className={`exam-card ${item.result}`}>
              <div className="exam-info">
                <div className="exam-name">{item.name}</div>
                <div className="exam-lab">{item.lab}</div>
                <div className="exam-date">{item.date}</div>
              </div>
              <div className="exam-actions">
                <span className={`exam-result ${item.result}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}