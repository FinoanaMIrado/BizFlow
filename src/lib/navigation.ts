interface Nav{
    id:number;
    nom:string;
    chemin:string;
}
export const Navsidebar: Nav[] = [
   {id: 1 , nom : "Dashboard",chemin:"../dashboard"},
   {id: 2 , nom : "Clients",chemin:"../dashboard/clients"},
   {id: 2 , nom : "Commandes",chemin:"../dashboard/commandes"},
   {id: 2 , nom : "Produits",chemin:"../dashboard/produits"},
   {id: 2 , nom : "Paiements",chemin:"../dashboard/paiements"},
   {id: 2 , nom : "Utilisateurs",chemin:"../dashboard/utilisateurs"},
   {id: 2 , nom : "Historique",chemin:"../dashboard/historique"}

//    {id: 3 , nom : "Produits",}
];