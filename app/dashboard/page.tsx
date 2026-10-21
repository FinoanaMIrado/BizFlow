import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CircleDollarSign,
  MoreHorizontal,
  Package,
  ShoppingBag,
  UsersRound,
} from "lucide-react";

const metrics = [
  {
    label: "Chiffre d’affaires",
    value: "12 840 000 Ar",
    change: "+12,8 %",
    note: "vs. mois dernier",
    positive: true,
    icon: CircleDollarSign,
    iconStyle: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Commandes",
    value: "284",
    change: "+8,2 %",
    note: "vs. mois dernier",
    positive: true,
    icon: ShoppingBag,
    iconStyle: "bg-sky-50 text-sky-600",
  },
  {
    label: "Nouveaux clients",
    value: "48",
    change: "+4,3 %",
    note: "vs. mois dernier",
    positive: true,
    icon: UsersRound,
    iconStyle: "bg-violet-50 text-violet-600",
  },
  {
    label: "Produits en stock faible",
    value: "12",
    change: "À réapprovisionner",
    note: "voir les produits",
    positive: false,
    icon: Package,
    iconStyle: "bg-amber-50 text-amber-600",
  },
];

const orders = [
  { initials: "AR", customer: "Ando Raveloson", email: "ando.r@email.com", item: "Pack découverte", date: "Aujourd’hui, 09:42", amount: "245 000 Ar", status: "Payée" },
  { initials: "SM", customer: "Sarah Mamy", email: "sarah.m@email.com", item: "Crème hydratante", date: "Aujourd’hui, 08:16", amount: "89 000 Ar", status: "En attente" },
  { initials: "TR", customer: "Toky Rakoto", email: "toky.r@email.com", item: "Sérum vitamine C", date: "Hier, 16:38", amount: "125 000 Ar", status: "Payée" },
  { initials: "HL", customer: "Hery Lanto", email: "hery.l@email.com", item: "Coffret essentiel", date: "Hier, 14:05", amount: "320 000 Ar", status: "Payée" },
];

const bars = [34, 48, 39, 58, 46, 66, 51, 63, 44, 74, 57, 86, 62, 72, 53, 92, 69, 79, 61, 100, 74, 88, 67, 82, 59, 94, 72, 84];

export default function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10 lg:py-9">
      <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-medium text-slate-500">Mardi 20 octobre 2026</p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[30px]">
            Bonjour, Finoana <span aria-hidden="true">👋</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Voici ce qui se passe dans votre boutique aujourd’hui.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
        >
          <span className="text-lg leading-none">+</span>
          Nouvelle commande
        </button>
      </header>

      <section aria-label="Indicateurs clés" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const ChangeIcon = metric.positive ? ArrowUpRight : ArrowDownRight;

          return (
            <article key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40">
              <div className="flex items-start justify-between">
                <div className={`flex size-10 items-center justify-center rounded-xl ${metric.iconStyle}`}>
                  <Icon size={19} strokeWidth={1.9} />
                </div>
                <button type="button" aria-label={`Options : ${metric.label}`} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
                  <MoreHorizontal size={19} />
                </button>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500">{metric.label}</p>
              <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                <p className="text-[25px] font-bold tracking-tight text-slate-900">{metric.value}</p>
                <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${metric.positive ? "text-emerald-600" : "text-amber-600"}`}>
                  {metric.positive && <ChangeIcon size={14} />}
                  {metric.change}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400">{metric.note}</p>
            </article>
          );
        })}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)]">
        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Évolution des ventes</h2>
              <p className="mt-1 text-sm text-slate-500">Suivez votre chiffre d’affaires au fil du temps.</p>
            </div>
            <select aria-label="Période du graphique" defaultValue="30 jours" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none focus:border-indigo-400">
              <option>7 jours</option>
              <option>30 jours</option>
              <option>12 mois</option>
            </select>
          </div>
          <div className="mt-7 flex items-end gap-3">
            <p className="text-3xl font-bold tracking-tight text-slate-900">8 420 000 Ar</p>
            <span className="mb-1 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight size={14} /> 12,8 %
            </span>
          </div>
          <div className="mt-5 flex h-40 items-end gap-1.5 sm:h-48 sm:gap-2" aria-label="Graphique des ventes quotidiennes">
            {bars.map((height, index) => (
              <div key={index} className="group relative flex h-full flex-1 items-end">
                <div
                  className={`w-full rounded-t-[4px] transition-colors ${index === 19 ? "bg-indigo-600" : "bg-indigo-100 group-hover:bg-indigo-300"}`}
                  style={{ height: `${height}%` }}
                  title={`${height * 1250} Ar`}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-400">
            <span>1 oct.</span>
            <span>5 oct.</span>
            <span>10 oct.</span>
            <span>15 oct.</span>
            <span>20 oct.</span>
            <span>28 oct.</span>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Répartition des commandes</h2>
              <p className="mt-1 text-sm text-slate-500">État actuel des commandes</p>
            </div>
            <button type="button" aria-label="Plus d’options" className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
              <MoreHorizontal size={19} />
            </button>
          </div>
          <div className="my-7 flex justify-center">
            <div className="relative flex size-40 items-center justify-center rounded-full" style={{ background: "conic-gradient(#4f46e5 0deg 223deg, #38bdf8 223deg 294deg, #fbbf24 294deg 335deg, #e2e8f0 335deg 360deg)" }}>
              <div className="flex size-[118px] flex-col items-center justify-center rounded-full bg-white">
                <span className="text-3xl font-bold tracking-tight text-slate-900">284</span>
                <span className="mt-0.5 text-xs text-slate-500">commandes</span>
              </div>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              { label: "Livrées", count: "176 (62 %)", color: "bg-indigo-600" },
              { label: "En cours", count: "56 (20 %)", color: "bg-sky-400" },
              { label: "En attente", count: "32 (11 %)", color: "bg-amber-400" },
              { label: "Annulées", count: "20 (7 %)", color: "bg-slate-200" },
            ].map((item) => (
              <li key={item.label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2.5 text-slate-600">
                  <span className={`size-2.5 rounded-full ${item.color}`} />
                  {item.label}
                </span>
                <span className="font-semibold text-slate-800">{item.count}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Commandes récentes</h2>
            <p className="mt-1 text-sm text-slate-500">Les dernières commandes passées dans votre boutique.</p>
          </div>
          <a href="/dashboard/commandes" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
            Voir tout <ArrowRight size={15} />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-y border-slate-100 bg-slate-50/70 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                <th className="px-6 py-3">Client</th>
                <th className="px-4 py-3">Article</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Montant</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-5 py-3"><span className="sr-only">Options</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={`${order.customer}-${order.date}`} className="transition-colors hover:bg-slate-50/70">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">{order.initials}</span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-800">{order.customer}</span>
                        <span className="mt-0.5 block text-xs text-slate-400">{order.email}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-slate-600">{order.item}</td>
                  <td className="px-4 py-3.5 text-sm text-slate-500">{order.date}</td>
                  <td className="px-4 py-3.5 text-sm font-semibold text-slate-800">{order.amount}</td>
                  <td className="px-4 py-3.5">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${order.status === "Payée" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button type="button" aria-label={`Options pour ${order.customer}`} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3.5 text-xs text-slate-500 sm:px-6">
          <span>Affichage de 4 commandes sur 284</span>
          <a href="/dashboard/commandes" className="font-semibold text-indigo-600 hover:text-indigo-800">Toutes les commandes</a>
        </div>
      </section>
    </div>
  );
}