"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Clock, Users } from "lucide-react"

export function HomePage({ onNavigate }) {
  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Seus dados protegidos",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Agendamentos rápidos e práticos",
    },
    {
      icon: Users,
      title: "Informação",
      description: "Informe-se de forma rápida e prática",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
          <Heart className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Bem-vindo ao <span className="text-primary">Saiba + Saúde</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Sua plataforma prática de saúde. Agende consultas, informe-se, acompanhe seu histórico
          médico e cuide do seu bem-estar com praticidade.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-16">
        <Button
          variant="outline"
          size="lg"
          className="rounded-xl px-8 bg-transparent"
          onClick={() => onNavigate("login")}
        >
          Entrar
        </Button>
        <Button size="lg" className="rounded-xl px-8" onClick={() => onNavigate("cadastro")}>
          Cadastrar-se
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="rounded-xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
