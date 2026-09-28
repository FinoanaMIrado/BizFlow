export default function Home(){
  return(
    <main>
      <h1 className="text-center">BizFlow</h1>
     <div className="flex gap-x-1">
        <nav>
          <a href="#dash">Dashboard</a>
          <a href="#cmd">Commandes</a>
          <a href="#clt">Client</a>
        </nav>
        
        <section>
          <p className="text-justify m-20">BizFlow est une plateforme web permettant à une petite entreprise de centraliser la
    gestion de ses clients, produits et services, commandes, paiements, utilisateurs et activités
  à travers une interface web moderne et sécurisée.</p>
        </section>
      {/* <p>Plateforme de gestion d'entreprise</p> */}
     </div>
      
      
    </main>
  )
}