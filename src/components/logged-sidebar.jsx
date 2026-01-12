"use client"

import { User, Calendar, Megaphone, LogOut, Heart, Building2, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export function LoggedSidebar({ currentPage, onNavigate, onLogout }) {
  const menuItems = [
    { id: "perfil", label: "Meu Perfil", icon: User },
    { id: "agendamentos", label: "Agendamentos", icon: Calendar },
    { id: "unidades", label: "Unidades", icon: Building2 },
    { id: "historico", label: "Histórico", icon: FileText },
    { id: "campanhas", label: "Campanhas", icon: Megaphone },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border shadow-sm flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-xl">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Saiba + Saúde</h1>
            <p className="text-xs text-muted-foreground">Área do Paciente</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-destructive hover:bg-destructive/10 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  )
}
