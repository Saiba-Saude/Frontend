"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, Stethoscope, Clock, MapPin } from "lucide-react"

export function HistoricoPage({ agendamentos }) {
  // Filtrar consultas concluídas
  const consultasConcluidas = agendamentos.filter((a) => a.status === "concluido")

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Histórico Médico</h1>
          <p className="text-muted-foreground">Visualize suas consultas concluídas</p>
        </div>
        <div className="flex gap-3"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Consultas Concluídas */}
        <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="rounded-xl shadow-sm h-fit">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Consultas Concluídas
              </CardTitle>
            </CardHeader>
            <CardContent>
              {consultasConcluidas.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Nenhuma consulta concluída ainda.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {consultasConcluidas.map((consulta, index) => (
                    <div
                      key={consulta.id}
                      className="p-4 bg-accent/50 rounded-xl animate-fade-in hover:shadow-md transition-shadow"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Building2 className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{consulta.unidade}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {consulta.bairro}, {consulta.municipio}
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border border-green-200">
                          Concluído
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Stethoscope className="w-4 h-4" />
                          {consulta.tipoConsulta}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {consulta.data}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {consulta.horario}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
