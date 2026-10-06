interface Nav{
    id:number;
    nom:string;
    chemin:string;
}
export const Navsidebar: Nav[] = [
   {id: 1 , nom : "CLIENT",chemin:"../dashboard/clients"},
   {id: 2 , nom : "COMMANDE",chemin:"../dashboard/commandes"}
];