"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stethoscope, Briefcase, User, ArrowLeft, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CadastroPage({ onNavigate }) {
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
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
      { id: "nome", label: "Nome Completo", type: "text", placeholder: "Digite seu nome completo", colSpan: 2 },
      { id: "sexo", label: "Sexo", type: "select", options: ["Masculino", "Feminino", "Outro"] },
      { id: "dataNascimento", label: "Data de Nascimento", type: "date" },
      { id: "cartaoSus", label: "Número do Cartão do SUS", type: "text", placeholder: "Digite o número do cartão" },
      { id: "telefone", label: "Telefone", type: "tel", placeholder: "(81) 00000-0000" },
      { id: "bairro", label: "Bairro", type: "select", options: bairrosIgarassu },
      { id: "municipio", label: "Município", type: "text", placeholder: "Igarassu", defaultValue: "Igarassu" },
      { id: "senha", label: "Senha", type: "password", placeholder: "Crie uma senha", colSpan: 2 },
    ],
    medico: [
      { id: "nome", label: "Nome Completo", type: "text", placeholder: "Digite seu nome completo", colSpan: 2 },
      { id: "sexo", label: "Sexo", type: "select", options: ["Masculino", "Feminino", "Outro"] },
      { id: "dataNascimento", label: "Data de Nascimento", type: "date" },
      { id: "crm", label: "CRM", type: "text", placeholder: "Digite seu CRM" },
      { id: "especializacao", label: "Especialização", type: "text", placeholder: "Ex: Cardiologia" },
      { id: "senha", label: "Senha", type: "password", placeholder: "Crie uma senha", colSpan: 2 },
    ],
    profissional: [
      { id: "nome", label: "Nome Completo", type: "text", placeholder: "Digite seu nome completo", colSpan: 2 },
      { id: "sexo", label: "Sexo", type: "select", options: ["Masculino", "Feminino", "Outro"] },
      { id: "dataNascimento", label: "Data de Nascimento", type: "date" },
      { id: "cpf", label: "CPF", type: "text", placeholder: "000.000.000-00" },
      { id: "rg", label: "RG", type: "text", placeholder: "Digite seu RG" },
      { id: "telefone", label: "Telefone", type: "tel", placeholder: "(81) 00000-0000" },
      { id: "senha", label: "Senha", type: "password", placeholder: "Crie uma senha" },
    ],
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    toast({
      title: "Sucesso!",
      description: "Cadastro realizado com sucesso!",
    })
  }

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-12">
            <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Cadastro Realizado!</h2>
            <p className="text-muted-foreground mb-6">
              Seu cadastro foi enviado com sucesso. Em breve você receberá um e-mail de confirmação.
            </p>
            <Button onClick={() => onNavigate("login")} className="rounded-xl">
              Ir para Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (selectedProfile) {
    const fields = formFields[selectedProfile]

    return (
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setSelectedProfile(null)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para seleção
        </button>

        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle>
              Cadastro de {profiles.find((p) => p.id === selectedProfile)?.title.replace("Sou ", "")}
            </CardTitle>
            <CardDescription>Preencha seus dados para criar sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map((field) => (
                  <div key={field.id} className={`space-y-2 ${field.colSpan === 2 ? "sm:col-span-2" : ""}`}>
                    <Label htmlFor={field.id}>{field.label}</Label>
                    {field.type === "select" ? (
                      <Select>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option) => (
                            <SelectItem key={option} value={option.toLowerCase()}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        className="rounded-xl"
                      />
                    )}
                  </div>
                ))}
              </div>

              <Button type="submit" className="w-full rounded-xl mt-6">
                Finalizar Cadastro
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para Home
      </button>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Criar Conta</h1>
        <p className="text-muted-foreground">Selecione seu perfil para começar</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {profiles.map((profile) => {
          const Icon = profile.icon
          return (
            <Card
              key={profile.id}
              className="rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-primary"
              onClick={() => setSelectedProfile(profile.id)}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{profile.title}</h3>
                <p className="text-sm text-muted-foreground">{profile.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
