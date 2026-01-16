"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Calendar, Phone, MapPin, Building, Edit, Save, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { api } from "../service/api"

function decodeToken(token) {
  try {
    const payload = token.split(".")[1]
    return JSON.parse(atob(payload))
  } catch {
    return null
  }
}

export function PerfilPage() {
  const [userData, setUserData] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})
  const { toast } = useToast()

  useEffect(() => {
    carregarPerfil()
  }, [])

  async function carregarPerfil() {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("Token ausente")

      const decoded = decodeToken(token)
      // { id, tipo }

      let endpoint = ""

      switch (decoded.tipo) {
        case "PACIENTE":
          endpoint = `/pacientes/${decoded.id}`
          break
        case "MEDICO":
          endpoint = `/medicos/${decoded.id}`
          break
        case "PROFISSIONAL":
          endpoint = `/profissional/${decoded.id}`
          break
        default:
          throw new Error("Tipo de usuário inválido")
      }

      const response = await api.get(endpoint)

      setUserData({
        ...response.data,
        tipo: decoded.tipo,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Sessão inválida ou expirada",
      })
    }
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

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token")
      const decoded = decodeToken(token)

      let endpoint = ""

      switch (decoded.tipo) {
        case "PACIENTE":
          endpoint = `/pacientes/${decoded.id}`
          break
        case "MEDICO":
          endpoint = `/medicos/${decoded.id}`
          break
        case "PROFISSIONAL":
          endpoint = `/profissional/${decoded.id}`
          break
      }

      const response = await api.patch(endpoint, editData)

      setUserData({
        ...userData,
        ...response.data,
      })

      setIsEditing(false)

      toast({
        title: "Sucesso",
        description: "Perfil atualizado com sucesso!",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao salvar alterações",
      })
    }
  }

  if (!userData) {
    return <p className="text-center mt-10">Carregando perfil...</p>
  }

 function getInfoItems(userData) {
  if (!userData) return [];

  const formatarSexo = (sexo, tipo) => {
    if (tipo === "PACIENTE") return sexo || "-"; // já vem "Masculino", "Feminino" ou "Outro"
    if (sexo === "M") return "Masculino";
    if (sexo === "F") return "Feminino";
    return "-";
  };

  const formatarData = (data) => {
    if (!data) return "";
    if (data.includes("-")) {
      const [ano, mes, dia] = data.split("-");
      return `${dia}/${mes}/${ano}`;
    }
    return data;
  };

  switch (userData.tipo) {
    case "MEDICO":
      return [
        { icon: User, label: "Nome Completo", value: userData.nome },
        { icon: User, label: "Sexo", value: formatarSexo(userData.sexo, "MEDICO") },
        { icon: Calendar, label: "Data de Nascimento", value: formatarData(userData.nascimento) },
        { icon: User, label: "CRM", value: userData.crm },
        { icon: User, label: "Especialização", value: userData.especializacao },
      ];

    case "PACIENTE":
      return [
        { icon: User, label: "Nome Completo", value: userData.nome },
        { icon: User, label: "Sexo", value: formatarSexo(userData.sexo, "PACIENTE") },
        { icon: Calendar, label: "Data de Nascimento", value: formatarData(userData.nascimento) },
        { icon: Phone, label: "Telefone", value: userData.telefone, editable: true, field: "telefone" },
        { icon: MapPin, label: "Bairro", value: userData.bairro, editable: true, field: "bairro" },
        { icon: Building, label: "Município", value: userData.municipio, editable: true, field: "municipio" },
        { icon: User, label: "Cartão SUS", value: userData.cartaosus },
      ];

    case "PROFISSIONAL":
      return [
        { icon: User, label: "Nome Completo", value: userData.nome },
        { icon: User, label: "Sexo", value: formatarSexo(userData.sexo, "PROFISSIONAL") },
        { icon: Calendar, label: "Data de Nascimento", value: formatarData(userData.nascimento) },
        { icon: Phone, label: "Telefone", value: userData.telefone, editable: true, field: "telefone" },
        { icon: User, label: "CPF", value: userData.cpf },
        { icon: User, label: "RG", value: userData.rg },
      ];

    default:
      return [];
  }
}

  return (
    <div className="max-w-4xl mx-auto space-y-6">
  <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold">Meu Perfil</h1>

    {isEditing ? (
      <div className="flex gap-2">
        <Button variant="outline" onClick={handleCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancelar
        </Button>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Salvar
        </Button>
      </div>
    ) : (
      <Button onClick={handleEdit}>
        <Edit className="w-4 h-4 mr-2" />
        Editar Perfil
      </Button>
    )}
  </div>

  <Card>
    <CardContent className="p-8">
      <div className="flex gap-6 items-center border-b pb-8 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarFallback className="text-2xl">
            {userData.nome
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div>
          <h2 className="text-2xl font-bold">{userData.nome}</h2>
          <span className="mt-2 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            {userData.tipo}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {getInfoItems(userData).map((item, index) => {
          const Icon = item.icon
          const editable = item.editable && isEditing

          return (
            <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                {editable ? (
                  <Input
                    value={editData[item.field]}
                    onChange={(e) =>
                      setEditData({ ...editData, [item.field]: e.target.value })
                    }
                    className="mt-1 h-9"
                  />
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </CardContent>
  </Card>
</div>
  )
}