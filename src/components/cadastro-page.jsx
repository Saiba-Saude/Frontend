"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stethoscope, Briefcase, User, ArrowLeft, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { api } from "../service/api"

export function CadastroPage({ onNavigate }) {
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    municipio: "Igarassu"
  })
  const { toast } = useToast()

  const profiles = [
    {
      id: "medico",
      title: "Sou Médico",
      description: "Acesse prontuários e gerencie consultas",
      icon: Stethoscope,
    },
    {
      id: "profissional",
      title: "Sou Profissional",
      description: "Gerencie agendamentos e atendimentos",
      icon: Briefcase,
    },
    {
      id: "paciente",
      title: "Sou Paciente",
      description: "Agende consultas e acompanhe seu histórico",
      icon: User,
    },
  ]

  const bairrosIgarassu = [
    "Centro",
    "Cruz de Rebouças",
    "Três Ladeiras",
    "Nova Cruz",
    "Cortegada",
    "Agamenon Magalhães",
    "Sítio Histórico",
  ]

  const formFields = {
    paciente: [
      { id: "nome", label: "Nome Completo", type: "text", colSpan: 2 },
      { id: "sexo", label: "Sexo", type: "select", options: ["M","F"] },
      { id: "nascimento", label: "Data de Nascimento", type: "date" },
      { id: "cartaosus", label: "Cartão SUS", type: "text" },
      { id: "telefone", label: "Telefone", type: "tel" },
      { id: "bairro", label: "Bairro", type: "select", options: bairrosIgarassu },
      { id: "municipio", label: "Município", type: "text", defaultValue: "Igarassu" },
      { id: "senha", label: "Senha", type: "password", colSpan: 2 },
    ],
    medico: [
      { id: "nome", label: "Nome Completo", type: "text", colSpan: 2 },
      { id: "sexo", label: "Sexo", type: "select", options: ["M","F"] },
      { id: "nascimento", label: "Data de Nascimento", type: "date" },
      { id: "crm", label: "CRM", type: "text" },
      { id: "especializacao", label: "Especialização", type: "text" },
      { id: "senha", label: "Senha", type: "password", colSpan: 2 },
    ],
    profissional: [
      { id: "nome", label: "Nome Completo", type: "text", colSpan: 2 },
      { id: "sexo", label: "Sexo", type: "select", options: ["M","F"] },
      { id: "nascimento", label: "Data de Nascimento", type: "date" },
      { id: "cpf", label: "CPF", type: "text" },
      { id: "rg", label: "RG", type: "text" },
      { id: "telefone", label: "Telefone", type: "tel" },
      { id: "senha", label: "Senha", type: "password" },
    ],
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  if (!selectedProfile) {
    toast({
      title: "Erro",
      description: "Selecione um perfil",
      variant: "destructive",
    })
    return
  }

  let endpointMap = {
    paciente: "/pacientes/saibamais",
    profissional: "/profissional",
    medico: "/medicos",
  }

  const endpoint = endpointMap[selectedProfile]

  try {

    await api.post(endpoint, formData)

    setIsSubmitted(true)
    toast({
      title: "Sucesso!",
      description: "Cadastro realizado com sucesso!",
    })
  } catch (error) {
    console.error("ERRO BACKEND:", error.response?.data || error.message)

    toast({
      title: "Erro no cadastro",
      description:
        error.response?.data?.message ||
        "Erro ao comunicar com o servidor",
      variant: "destructive",
    })
  }
}



  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <Card>
          <CardContent className="p-12">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Cadastro Realizado!</h2>
            <Button onClick={() => onNavigate("login")}>Ir para Login</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (selectedProfile) {
    const fields = formFields[selectedProfile]

    return (
      <div className="max-w-2xl mx-auto">
        <button onClick={() => setSelectedProfile(null)} className="flex gap-2 mb-4">
          <ArrowLeft /> Voltar
        </button>

        <Card>
          <CardHeader>
            <CardTitle>Cadastro</CardTitle>
            <CardDescription>Preencha os dados</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {fields.map((field) => (
                  <div key={field.id} className={field.colSpan === 2 ? "sm:col-span-2" : ""}>
                    <Label>{field.label}</Label>

                    {field.type === "select" ? (
                      <Select value={formData[field.id] || ""} onValueChange={(v) => handleChange(field.id, v)}>

                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                     <Input
                         type={field.type}
                          value={formData[field.id] ?? field.defaultValue ?? ""}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                      />

                    )}
                  </div>
                ))}
              </div>

              <Button type="submit" className="w-full mt-4">
                Finalizar Cadastro
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {profiles.map((profile) => {
        const Icon = profile.icon
        return (
          <Card key={profile.id} onClick={() => setSelectedProfile(profile.id)} className="cursor-pointer">
            <CardContent className="text-center p-6">
              <Icon className="mx-auto mb-2" />
              <h3 className="font-bold">{profile.title}</h3>
              <p>{profile.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
