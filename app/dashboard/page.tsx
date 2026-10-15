const transactions = [
  { initials: "MD", name: "Dépôt fournisseur", date: "28 Jan 2021", amount: "+$850", tone: "green" },
  { initials: "JM", name: "Paiement équipe", date: "25 Jan 2021", amount: "-$2,500", tone: "red" },
  { initials: "JM", name: "Remboursement", date: "21 Jan 2021", amount: "+$5,400", tone: "green" },
]

const bars = [55, 38, 44, 70, 31, 61, 43]

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(41,57,91,0.04)] ${className}`}>{children}</section>
}

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return <div className="mb-3 flex items-center justify-between"><h2 className="text-[12px] font-semibold text-slate-700">{title}</h2>{action && <button className="text-[10px] font-medium text-slate-400">{action}</button>}</div>
}

export default function Dashboard() {
  return (
    <main className="min-h-screen flex-1 bg-[#f6f8fc] px-5 py-5 text-slate-700 md:px-8 lg:px-10">
      <header className="mb-6 flex items-center justify-between">
        <div><p className="text-[11px] font-medium text-slate-400">Mercredi, 28 janvier 2021</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-[#202b54]">Bonjour, Finoana</h1></div>
        <div className="flex items-center gap-3"><button aria-label="Notifications" className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-400">♧</button><div className="grid size-9 place-items-center rounded-full bg-[#d9e8ee] text-xs font-bold text-[#315a67]">FM</div></div>
      </header>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
        <div className="min-w-0 space-y-5">
          <div className="grid gap-4 md:grid-cols-2"><Card className="overflow-hidden border-0 bg-gradient-to-br from-[#3034df] to-[#2422bd] text-white"><div className="flex items-start justify-between"><div><p className="text-[10px] text-indigo-200">Solde du compte</p><p className="mt-1 text-2xl font-bold">$5,756</p></div><span className="rounded-md bg-white/20 px-2 py-1 text-[10px]">•••</span></div><div className="mt-7 flex items-end justify-between"><div><p className="text-[9px] text-indigo-200">Titulaire</p><p className="text-[11px] font-medium">Eddy Causma</p></div><div><p className="text-[9px] text-indigo-200">Valide jusqu&apos;au</p><p className="text-[11px]">12/22</p></div></div><p className="mt-5 text-sm tracking-[0.18em]">3778  ••••  1234</p></Card><Card className="bg-white"><div className="flex items-start justify-between"><div><p className="text-[10px] text-slate-400">Solde disponible</p><p className="mt-1 text-2xl font-bold text-[#202b54]">$5,756</p></div><span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">•••</span></div><div className="mt-7 flex items-end justify-between"><div><p className="text-[9px] text-slate-400">Titulaire</p><p className="text-[11px] font-medium">Eddy Causma</p></div><div><p className="text-[9px] text-slate-400">Valide jusqu&apos;au</p><p className="text-[11px]">12/22</p></div></div><p className="mt-5 text-sm tracking-[0.18em] text-slate-500">3778  ••••  1234</p></Card></div>

          <Card><SectionTitle title="Activité hebdomadaire" action="Cette semaine" /><div className="flex h-44 items-end justify-between gap-3 px-1 pt-4">{bars.map((height, index) => <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="flex h-full items-end gap-1"><span className="w-1.5 rounded-full bg-[#3034df]" style={{ height: `${height}%` }} /><span className="w-1.5 rounded-full bg-[#16c6bf]" style={{ height: `${Math.max(22, height - 19)}%` }} /></div><span className="text-[9px] text-slate-400">{["Sam", "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven"][index]}</span></div>)}</div><div className="mt-2 flex justify-center gap-5 text-[10px] text-slate-400"><span><i className="mr-1 inline-block size-2 rounded-full bg-[#3034df]" />Entrées</span><span><i className="mr-1 inline-block size-2 rounded-full bg-[#16c6bf]" />Sorties</span></div></Card>

          <div className="grid gap-5 lg:grid-cols-2"><Card><SectionTitle title="Transfert rapide" action="Voir tout" /><div className="flex gap-3">{[["LB", "Livia Bator"], ["RP", "Randy Press"], ["WK", "Workman"]].map(([initials, name]) => <div key={name} className="text-center"><div className="mx-auto grid size-10 place-items-center rounded-full bg-[#dce8e4] text-[10px] font-bold text-[#315a67]">{initials}</div><p className="mt-1 text-[9px] font-semibold text-slate-600">{name}</p><p className="text-[8px] text-slate-400">Directeur</p></div>)}</div><div className="mt-5 flex items-center gap-2"><input aria-label="Montant du transfert" className="h-9 min-w-0 flex-1 rounded-lg border border-slate-100 bg-slate-50 px-3 text-xs outline-none" placeholder="Montant" /><button className="h-9 rounded-lg bg-[#3034df] px-4 text-[10px] font-semibold text-white">Envoyer</button></div></Card><Card><SectionTitle title="Historique du solde" action="2021" /><div className="relative h-36 overflow-hidden rounded-lg bg-slate-50"><div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-200" /><svg viewBox="0 0 400 140" className="absolute inset-0 size-full" preserveAspectRatio="none"><path d="M0 105 C30 100 35 70 60 82 S95 98 112 55 S145 80 165 35 S194 57 210 110 S242 125 255 76 S290 90 310 120 S340 95 360 45 S385 75 400 59 V140 H0 Z" fill="#e6e9ff" /><path d="M0 105 C30 100 35 70 60 82 S95 98 112 55 S145 80 165 35 S194 57 210 110 S242 125 255 76 S290 90 310 120 S340 95 360 45 S385 75 400 59" fill="none" stroke="#3034df" strokeWidth="2" /></svg></div></Card></div>
        </div>

        <div className="space-y-5"><Card><SectionTitle title="Transactions récentes" action="Voir tout" /><div className="space-y-4">{transactions.map((item) => <div key={item.name} className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-full bg-[#f3f0d9] text-[10px] font-bold text-[#c79d25]">{item.initials}</div><div className="min-w-0 flex-1"><p className="truncate text-[10px] font-semibold text-slate-700">{item.name}</p><p className="text-[9px] text-slate-400">{item.date}</p></div><strong className={`text-[10px] ${item.tone === "red" ? "text-rose-400" : "text-emerald-500"}`}>{item.amount}</strong></div>)}</div></Card><Card><SectionTitle title="Statistiques des dépenses" /><div className="flex items-center justify-center py-2"><div className="relative grid size-36 place-items-center rounded-full bg-[conic-gradient(#3034df_0_35%,#ff4fc3_35%_55%,#ff9a35_55%_70%,#ffd85c_70%_100%)]"><div className="grid size-20 place-items-center rounded-full bg-white text-center text-[9px] font-semibold text-slate-500">Répartition<br />mensuelle</div></div></div><div className="mt-3 grid grid-cols-2 gap-2 text-[9px] text-slate-400"><span><i className="mr-1 inline-block size-2 rounded-full bg-[#3034df]" />Autres</span><span><i className="mr-1 inline-block size-2 rounded-full bg-[#ff4fc3]" />Restaurants</span><span><i className="mr-1 inline-block size-2 rounded-full bg-[#ff9a35]" />Transport</span><span><i className="mr-1 inline-block size-2 rounded-full bg-[#ffd85c]" />Shopping</span></div></Card></div>
      </div>
    </main>
  )
}

