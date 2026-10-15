"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Navsidebar } from "../lib/navigation"

const icons = ["⌂", "♙", "▣", "◇", "◈", "♧", "◷"]

export default function Sidebar() {
  const pathname = usePathname()
  return <aside className="hidden min-h-screen w-60 shrink-0 border-r border-slate-100 bg-white px-5 py-6 lg:block"><div className="mb-10 flex items-center gap-2 px-2"><div className="grid size-8 place-items-center rounded-lg bg-[#3034df] text-sm font-bold text-white">B</div><span className="text-lg font-bold tracking-tight text-[#202b54]">BizFlow</span></div><p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">Menu principal</p><nav><ul className="flex flex-col gap-1">{Navsidebar.map((nav, index) => { const active = pathname === "/dashboard" ? index === 0 : pathname.startsWith(nav.chemin.replace("..", "")); return <li key={nav.id}><Link href={nav.chemin.replace("..", "")} className={`relative flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-medium transition ${active ? "bg-[#eef0ff] text-[#3034df]" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"}`}><span className="grid size-5 place-items-center text-sm">{icons[index]}</span>{nav.nom}</Link></li> })}</ul></nav><div className="mt-auto pt-16"><div className="rounded-2xl bg-[#f6f7ff] p-4"><p className="text-[11px] font-semibold text-[#3034df]">Besoin d&apos;aide ?</p><p className="mt-1 text-[10px] leading-4 text-slate-400">Notre équipe est disponible pour vous accompagner.</p><button className="mt-3 text-[10px] font-semibold text-[#3034df]">Contacter le support</button></div></div></aside>
}
