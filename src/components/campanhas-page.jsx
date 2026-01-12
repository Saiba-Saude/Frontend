"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Syringe, Heart, Baby, AlertTriangle, Info, Calendar } from "lucide-react"

export function CampanhasPage() {
  const campanhas = [
    {
      id: 1,
      titulo: "Campanha de Vacinação contra Gripe",
      descricao: "Vacine-se gratuitamente contra a gripe nas UBS de Igarassu. Disponível para todas as idades.",
      validade: "Até 28/02/2026",
      icon: Syringe,
    },
    {
      id: 2,
      titulo: "Mutirão de Saúde do Coração",
      descricao: "Exames cardiológicos gratuitos no Hospital Bom Jesus. Aferição de pressão e orientação médica.",
      validade: "Até 15/02/2026",
      icon: Heart,
    },
    {
      id: 3,
      titulo: "Programa Mãe e Bebê",
      descricao: "Acompanhamento pré-natal completo para gestantes nas unidades de saúde de Igarassu.",
      validade: "Permanente",
      icon: Baby,
    },
  ]

  const anuncios = [
    {
      id: 1,
      tipo: "alerta",
      titulo: "Manutenção Programada",
      resumo: "O sistema ficará indisponível dia 25/01 das 02h às 06h para manutenção.",
      data: "10/01/2026",
    },
    {
      id: 2,
      tipo: "info",
      titulo: "Novo Horário de Atendimento",
      resumo: "A partir de fevereiro, as UBS de Igarassu funcionarão das 7h às 17h.",
      data: "08/01/2026",
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Teleconsulta Disponível",
      resumo: "Agora você pode realizar consultas online pelo portal Saiba + Saúde.",
      data: "05/01/2026",
    },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Campanhas e Anúncios</h1>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Campanhas de Saúde</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campanhas.map((campanha, index) => {
            const Icon = campanha.icon

            return (
              <Card
                key={campanha.id}
                className={`rounded-xl shadow-sm border-l-4 border-l-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{campanha.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{campanha.descricao}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {campanha.validade}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Avisos e Anúncios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {anuncios.map((anuncio, index) => {
            const isAlerta = anuncio.tipo === "alerta"

            return (
              <Card
                key={anuncio.id}
                className={`rounded-xl shadow-sm border-l-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in ${
                  isAlerta ? "border-l-yellow-500" : "border-l-slate-400"
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${isAlerta ? "bg-yellow-100" : "bg-slate-100"}`}>
                      {isAlerta ? (
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      ) : (
                        <Info className="w-6 h-6 text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{anuncio.titulo}</h3>
                        {isAlerta && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Importante
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{anuncio.resumo}</p>
                    </div>
                  </div>

                  <span className="text-xs text-muted-foreground">{anuncio.data}</span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
