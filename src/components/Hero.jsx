import { useState } from "react";
import medico from "../assets/medico.svg";
import "./Hero.css";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: "Agendamentos",
      text: "Marque consultas sem enfrentar filas."
    },
    {
      title: "Histórico Médico",
      text: "Acompanhe seus atendimentos em um só lugar."
    },
    {
      title: "Campanhas",
      text: "Receba alertas de vacinação e ações preventivas."
    },
    {
      title: "Unidades de Saúde",
      text: "Encontre postos próximos de você."
    }
  ];

  const next = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="section">
      <div className="bg-overlay"></div>

      <div className="container">
        <div className="hero-text">
  <h2>Saiba+Saúde</h2>

  <p className="section-subtitle">
    Acesso rápido, simples e digital aos serviços públicos de saúde
  </p>

  <img src={medico} className="medico-hero" />
</div>

        <div className="carousel-container">
          <button className="nav left" onClick={prev}>◀</button>

          <div className="carousel">
            <div
              className="cards"
              style={{ transform: `translateX(-${index * 320}px)` }}
            >
              {cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="nav right" onClick={next}>▶</button>
        </div>
      </div>
      <section className="hero">
  <div className="hero-container">
    <div className="hero-content">
      <h1>
        Uma plataforma criada para reduzir filas,
        burocracias e aproximar o cidadão do sistema público de saúde.
      </h1>

      <p>
        Centralizamos agendamentos, informações e campanhas
        em um único lugar digital.
      </p>

      <div className="hero-actions">
        <button className="btn-primary">Agendar Atendimento</button>
        <button className="btn-secondary">Ficar por dentro</button>
      </div>
    </div>
  </div>
</section>

    </section>
  );
};

export default Hero;
