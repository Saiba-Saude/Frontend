"use client"

import { Home, LogIn, UserPlus, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar({ currentPage, onNavigate }) {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "login", label: "Login", icon: LogIn },
    { id: "cadastro", label: "Cadastro", icon: UserPlus },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border shadow-sm">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-xl">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Saiba + Saúde</h1>
            <p className="text-xs text-muted-foreground">Igarassu-PE</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
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
    </aside>
  )
}
