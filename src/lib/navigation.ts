import {
  CreditCard,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  UserRound,
  History,
  type LucideIcon,
} from "lucide-react";

interface Nav {
  id: number;
  nom: string;
  chemin: string;
  icon: LucideIcon;
}

export const Navsidebar: Nav[] = [
  { id: 1, nom: "Dashboard", chemin: "/dashboard", icon: LayoutDashboard },
  { id: 2, nom: "Clients", chemin: "/dashboard/clients", icon: Users },
  { id: 3, nom: "Commandes", chemin: "/dashboard/commandes", icon: ShoppingCart },
  { id: 4, nom: "Produits", chemin: "/dashboard/produits", icon: Package },
  { id: 5, nom: "Paiements", chemin: "/dashboard/paiements", icon: CreditCard },
  { id: 6, nom: "Utilisateurs", chemin: "/dashboard/utilisateurs", icon: UserRound },
  { id: 7, nom: "Historique", chemin: "/dashboard/historique", icon: History },
];
