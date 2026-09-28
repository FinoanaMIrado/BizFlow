export default function Home(){
  return(
    <main>
      <nav className="flex gap-x-3">
        <a href="#dash">Dashboard</a>
        <a href="#cmd">Commandes</a>
        <a href="#clt">Client</a>
      </nav>
      <h1 className="text-center">BizFlow</h1>
      <section>
        <p className="text-justify m-20">BizFlow est une plateforme web permettant à une petite entreprise de centraliser la
  gestion de ses clients, produits et services, commandes, paiements, utilisateurs et activités
à travers une interface web moderne et sécurisée.</p>
      </section>
      {/* <p>Plateforme de gestion d'entreprise</p> */}
      
    </main>
  )
}