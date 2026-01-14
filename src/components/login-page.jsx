"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stethoscope, Briefcase, User, ArrowLeft } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { api } from "../service/api"

export function LoginPage({ onNavigate, onLogin }) {
  const [activeTab, setActiveTab] = useState("paciente")
  const [formData, setFormData] = useState({})

  const endpoints = {
    paciente: "/auth/login/paciente",
    medico: "/auth/login/medico",
    profissional: "/auth/login/profissional",
  }

  const loginConfigs = {
    medico: {
      icon: Stethoscope,
      fields: [
        { id: "crm", label: "CRM", placeholder: "Digite seu CRM", type: "text" },
        { id: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
      ],
    },
    profissional: {
      icon: Briefcase,
      fields: [
        { id: "cpf", label: "CPF", placeholder: "Digite seu CPF", type: "text" },
        { id: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
      ],
    },
    paciente: {
      icon: User,
      fields: [
        { id: "cartaoSus", label: "Número do Cartão do SUS", placeholder: "Digite o número do cartão", type: "text" },
        { id: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
      ],
    },
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    api
      .post(endpoints[activeTab], formData)
      .then((response) => {
        const { token } = response.data

        localStorage.setItem("token", token)

        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo ao sistema",
        })

        onLogin({ token })
      })
      .catch(() => {
        toast({
          title: "Erro ao acessar",
          description: "Credenciais inválidas ou erro no servidor",
          variant: "destructive",
        })
      })
  }

  return (
    <div className="max-w-lg mx-auto">
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para Home
      </button>

      <Card className="rounded-xl shadow-sm">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl">Acessar Portal</CardTitle>
          <CardDescription>Escolha seu tipo de acesso e faça login</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value)
              setFormData({})
            }}
          >
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="medico">Médico</TabsTrigger>
              <TabsTrigger value="profissional">Profissional</TabsTrigger>
              <TabsTrigger value="paciente">Paciente</TabsTrigger>
            </TabsList>

            {Object.entries(loginConfigs).map(([key, config]) => {
              const Icon = config.icon

              return (
                <TabsContent key={key} value={key}>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {config.fields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          onChange={handleChange}
                          className="rounded-xl"
                        />
                      </div>
                    ))}

                    <Button type="submit" className="w-full rounded-xl mt-6">
                      Acessar Portal
                    </Button>
                  </form>
                </TabsContent>
              )
            })}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}