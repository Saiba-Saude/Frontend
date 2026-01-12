"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { LoggedSidebar } from "@/components/logged-sidebar"
import { HomePage } from "@/components/home-page"
import { LoginPage } from "@/components/login-page"
import { CadastroPage } from "@/components/cadastro-page"
import { PerfilPage } from "@/components/perfil-page"
import { AgendamentosPage } from "@/components/agendamentos-page"
import { CampanhasPage } from "@/components/campanhas-page"
import { UnidadesPage } from "@/components/unidades-page"
import { HistoricoPage } from "@/components/historico-page"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedPage, setLoggedPage] = useState("perfil")
  const [userData, setUserData] = useState({
    nome: "João Silva",
    tipo: "Paciente",
    sexo: "Masculino",
    dataNascimento: "15/03/1985",
    telefone: "(81) 99999-9999",
    bairro: "Centro",
    municipio: "Igarassu",
  })

  const [agendamentos, setAgendamentos] = useState([
    {
      id: 1,
      unidade: "UBS Centro",
      bairro: "Centro",
      municipio: "Igarassu",
      data: "20/01/2026",
      horario: "09:00",
      tipoConsulta: "Clínica Médica",
      status: "pendente",
    },
    {
      id: 2,
      unidade: "UBS Cruz de Rebouças",
      bairro: "Cruz de Rebouças",
      municipio: "Igarassu",
      data: "15/01/2026",
      horario: "14:00",
      tipoConsulta: "Odontológica",
      status: "concluido",
    },
    {
      id: 3,
      unidade: "Hospital Bom Jesus",
      bairro: "Nova Cruz",
      municipio: "Igarassu",
      data: "10/01/2026",
      horario: "11:30",
      tipoConsulta: "Pediatria",
      status: "cancelado",
    },
    {
      id: 4,
      unidade: "UBS Três Ladeiras",
      bairro: "Três Ladeiras",
      municipio: "Igarassu",
      data: "05/01/2026",
      horario: "10:00",
      tipoConsulta: "Ginecologia",
      status: "concluido",
    },
  ])

  const handleLogin = (userType) => {
    setUserData((prev) => ({ ...prev, tipo: userType }))
    setIsLoggedIn(true)
    setLoggedPage("perfil")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage("home")
  }

  const handleUpdateUserData = (newData) => {
    setUserData(newData)
  }

  const handleAddAgendamento = (novoAgendamento) => {
    setAgendamentos([novoAgendamento, ...agendamentos])
  }

  if (isLoggedIn) {
    return (
      <div className="flex min-h-screen bg-background">
        <LoggedSidebar currentPage={loggedPage} onNavigate={setLoggedPage} onLogout={handleLogout} />
        <main className="flex-1 ml-64 p-8">
          {loggedPage === "perfil" && <PerfilPage userData={userData} onUpdateUserData={handleUpdateUserData} />}
          {loggedPage === "agendamentos" && (
            <AgendamentosPage agendamentos={agendamentos} onAddAgendamento={handleAddAgendamento} />
          )}
          {loggedPage === "campanhas" && <CampanhasPage />}
          {loggedPage === "unidades" && <UnidadesPage />}
          {loggedPage === "historico" && <HistoricoPage agendamentos={agendamentos} />}
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 ml-64 p-8">
        {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === "login" && <LoginPage onNavigate={setCurrentPage} onLogin={handleLogin} />}
        {currentPage === "cadastro" && <CadastroPage onNavigate={setCurrentPage} />}
      </main>
    </div>
  )
}
