"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Search, ExternalLink, Building2 } from "lucide-react"

export function UnidadesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const unidades = [
    {
      id: 1,
      nome: "UBS Centro",
      bairro: "Centro",
      municipio: "Igarassu",
      horario: "07:00 - 17:00",
      endereco: "Rua Dr. Júlio Maranhão, 45",
    },
    {
      id: 2,
      nome: "UBS Cruz de Rebouças",
      bairro: "Cruz de Rebouças",
      municipio: "Igarassu",
      horario: "07:00 - 17:00",
      endereco: "Av. Principal, 120",
    },
    {
      id: 3,
      nome: "Hospital Bom Jesus",
      bairro: "Nova Cruz",
      municipio: "Igarassu",
      horario: "24 horas",
      endereco: "Rua Bom Jesus, 500",
    },
    {
      id: 4,
      nome: "UBS Três Ladeiras",
      bairro: "Três Ladeiras",
      municipio: "Igarassu",
      horario: "07:00 - 17:00",
      endereco: "Rua das Palmeiras, 78",
    },
    {
      id: 5,
      nome: "UBS Cortegada",
      bairro: "Cortegada",
      municipio: "Igarassu",
      horario: "07:00 - 17:00",
      endereco: "Av. Cortegada, 230",
    },
    {
      id: 6,
      nome: "UBS Sítio Histórico",
      bairro: "Sítio Histórico",
      municipio: "Igarassu",
      horario: "08:00 - 16:00",
      endereco: "Praça da Igreja, 15",
    },
    {
      id: 7,
      nome: "UBS Agamenon Magalhães",
      bairro: "Agamenon Magalhães",
      municipio: "Igarassu",
      horario: "07:00 - 17:00",
      endereco: "Rua Agamenon Magalhães, 890",
    },
    {
      id: 8,
      nome: "UBS Nova Cruz",
      bairro: "Nova Cruz",
      municipio: "Igarassu",
      horario: "07:00 - 17:00",
      endereco: "Rua Nova, 156",
    },
  ]

  const filteredUnidades = unidades.filter(
    (unidade) =>
      unidade.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.bairro.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleOpenMaps = (endereco, municipio) => {
    const query = encodeURIComponent(`${endereco}, ${municipio}, PE`)
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">Unidades de Saúde</h1>
        <p className="text-muted-foreground">Encontre a unidade mais próxima em Igarassu-PE</p>
      </div>

      {/* Barra de Busca */}
      <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou bairro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 rounded-xl h-12"
          />
        </div>
      </div>

      {/* Grid de Unidades */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnidades.map((unidade, index) => (
          <Card
            key={unidade.id}
            className="rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${0.1 * (index + 2)}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">{unidade.nome}</h3>
                  <p className="text-sm text-muted-foreground">{unidade.endereco}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {unidade.bairro}, {unidade.municipio}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{unidade.horario}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-xl gap-2 bg-transparent"
                onClick={() => handleOpenMaps(unidade.endereco, unidade.municipio)}
              >
                <ExternalLink className="w-4 h-4" />
                Ver no Maps
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUnidades.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhuma unidade encontrada para "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}
