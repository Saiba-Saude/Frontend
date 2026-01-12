"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Calendar, Phone, MapPin, Building, Edit, Save, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function PerfilPage({ userData, onUpdateUserData }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    telefone: userData.telefone,
    bairro: userData.bairro,
    municipio: userData.municipio,
  })
  const { toast } = useToast()

  const getInitials = (nome) => {
    return nome
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditData({
      telefone: userData.telefone,
      bairro: userData.bairro,
      municipio: userData.municipio,
    })
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = () => {
    onUpdateUserData({
      ...userData,
      ...editData,
    })
    setIsEditing(false)
    toast({
      title: "Sucesso!",
      description: "Alterações salvas com sucesso!",
    })
  }

  const infoItems = [
    { icon: User, label: "Nome Completo", value: userData.nome, editable: false },
    { icon: User, label: "Sexo", value: userData.sexo, editable: false },
    { icon: Calendar, label: "Data de Nascimento", value: userData.dataNascimento, editable: false },
    { icon: Phone, label: "Telefone", value: userData.telefone, editable: true, field: "telefone" },
    { icon: MapPin, label: "Bairro", value: userData.bairro, editable: true, field: "bairro" },
    { icon: Building, label: "Município", value: userData.municipio, editable: true, field: "municipio" },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
        {isEditing ? (
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl gap-2 bg-transparent" onClick={handleCancel}>
              <X className="w-4 h-4" />
              Cancelar
            </Button>
            <Button className="rounded-xl gap-2" onClick={handleSave}>
              <Save className="w-4 h-4" />
              Salvar
            </Button>
          </div>
        ) : (
          <Button className="rounded-xl gap-2" onClick={handleEdit}>
            <Edit className="w-4 h-4" />
            Editar Perfil
          </Button>
        )}
      </div>

      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-8">
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                {getInitials(userData.nome)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{userData.nome}</h2>
              <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {userData.tipo}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Dados Pessoais</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {infoItems.map((item, index) => {
                const Icon = item.icon
                const isEditableField = item.editable && isEditing

                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {isEditableField ? (
                        <Input
                          value={editData[item.field]}
                          onChange={(e) => setEditData({ ...editData, [item.field]: e.target.value })}
                          className="mt-1 rounded-lg h-9"
                        />
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
