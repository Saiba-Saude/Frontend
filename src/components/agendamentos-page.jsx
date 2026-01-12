"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, MapPin, Building, Stethoscope } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function AgendamentosPage({ agendamentos, onAddAgendamento }) {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    unidade: "",
    bairro: "",
    municipio: "",
    data: "",
    horario: "",
    tipoConsulta: "",
  })

  const statusColors = {
    pendente: "bg-yellow-100 text-yellow-800 border-yellow-200",
    concluido: "bg-green-100 text-green-800 border-green-200",
    cancelado: "bg-red-100 text-red-800 border-red-200",
  }

  const statusLabels = {
    pendente: "Pendente",
    concluido: "Concluído",
    cancelado: "Cancelado",
  }

  const unidades = [
    "UBS Centro",
    "UBS Cruz de Rebouças",
    "UBS Três Ladeiras",
    "UBS Nova Cruz",
    "UBS Cortegada",
    "Hospital Bom Jesus",
  ]

  const bairros = [
    "Centro",
    "Cruz de Rebouças",
    "Três Ladeiras",
    "Nova Cruz",
    "Cortegada",
    "Agamenon Magalhães",
    "Sítio Histórico",
  ]

  const tiposConsulta = [
    "Clínica Médica",
    "Odontológica",
    "Pediatria",
    "Ginecologia",
    "Cardiologia",
    "Ortopedia",
    "Dermatologia",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.unidade && formData.bairro && formData.data && formData.horario && formData.tipoConsulta) {
      const novoAgendamento = {
        id: Date.now(),
        ...formData,
        municipio: "Igarassu",
        status: "pendente",
      }
      onAddAgendamento(novoAgendamento)
      setFormData({ unidade: "", bairro: "", municipio: "", data: "", horario: "", tipoConsulta: "" })
      toast({
        title: "Sucesso!",
        description: "Agendamento realizado com sucesso!",
      })
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Novo Agendamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo de Consulta</Label>
                <Select
                  value={formData.tipoConsulta}
                  onValueChange={(v) => setFormData({ ...formData, tipoConsulta: v })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Selecione o tipo de consulta" />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposConsulta.map((tipo) => (
                      <SelectItem key={tipo} value={tipo}>
                        {tipo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Unidade de Saúde</Label>
                <Select value={formData.unidade} onValueChange={(v) => setFormData({ ...formData, unidade: v })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Selecione a unidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {unidades.map((unidade) => (
                      <SelectItem key={unidade} value={unidade}>
                        {unidade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Bairro</Label>
                <Select value={formData.bairro} onValueChange={(v) => setFormData({ ...formData, bairro: v })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Selecione o bairro" />
                  </SelectTrigger>
                  <SelectContent>
                    {bairros.map((bairro) => (
                      <SelectItem key={bairro} value={bairro}>
                        {bairro}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Data</Label>
                  <Select value={formData.data} onValueChange={(v) => setFormData({ ...formData, data: v })}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20/01/2026">20/01/2026</SelectItem>
                      <SelectItem value="21/01/2026">21/01/2026</SelectItem>
                      <SelectItem value="22/01/2026">22/01/2026</SelectItem>
                      <SelectItem value="23/01/2026">23/01/2026</SelectItem>
                      <SelectItem value="24/01/2026">24/01/2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Horário</Label>
                  <Select value={formData.horario} onValueChange={(v) => setFormData({ ...formData, horario: v })}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">08:00</SelectItem>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full rounded-xl mt-4">
                Confirmar Agendamento
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle>Meus Agendamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {agendamentos.map((agendamento) => (
                <div key={agendamento.id} className="p-4 bg-muted/50 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="font-medium">{agendamento.unidade}</span>
                    </div>
                    <Badge className={`${statusColors[agendamento.status]} border`}>
                      {statusLabels[agendamento.status]}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Stethoscope className="w-3 h-3" />
                    {agendamento.tipoConsulta}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {agendamento.data}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {agendamento.horario}
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-3 h-3" />
                      {agendamento.bairro}, {agendamento.municipio}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
