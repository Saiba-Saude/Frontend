"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stethoscope, Briefcase, User, ArrowLeft } from "lucide-react"

export function LoginPage({ onNavigate, onLogin }) {
  const [activeTab, setActiveTab] = useState("paciente")

  const loginConfigs = {
    medico: {
      icon: Stethoscope,
      title: "Médico",
      fields: [
        { id: "crm", label: "CRM", placeholder: "Digite seu CRM", type: "text" },
        { id: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
      ],
    },
    profissional: {
      icon: Briefcase,
      title: "Profissional",
      fields: [
        { id: "cpf", label: "CPF", placeholder: "Digite seu CPF", type: "text" },
        { id: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
      ],
    },
    paciente: {
      icon: User,
      title: "Paciente",
      fields: [
        { id: "cartaoSus", label: "Número do Cartão do SUS", placeholder: "Digite o número do cartão", type: "text" },
        { id: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
      ],
    },
  }

  const handleSubmit = (e, userType) => {
    e.preventDefault()
    onLogin(userType)
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="medico" className="rounded-lg">
                Médico
              </TabsTrigger>
              <TabsTrigger value="profissional" className="rounded-lg">
                Profissional
              </TabsTrigger>
              <TabsTrigger value="paciente" className="rounded-lg">
                Paciente
              </TabsTrigger>
            </TabsList>

            {Object.entries(loginConfigs).map(([key, config]) => {
              const Icon = config.icon
              return (
                <TabsContent key={key} value={key}>
                  <form onSubmit={(e) => handleSubmit(e, config.title)} className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {config.fields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label htmlFor={`${key}-${field.id}`}>{field.label}</Label>
                        <Input
                          id={`${key}-${field.id}`}
                          type={field.type}
                          placeholder={field.placeholder}
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
