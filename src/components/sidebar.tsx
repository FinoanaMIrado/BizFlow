"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Boxes } from "lucide-react";
import { Navsidebar } from "../lib/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="z-10 flex w-full shrink-0 flex-col border-b border-slate-200 bg-white lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:border-b-0 lg:border-r">
      <Link
        href="/dashboard"
        className="flex items-center gap-3 px-5 py-4 lg:px-6 lg:py-7"
        aria-label="BizFlow, accueil du dashboard"
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
          <Boxes size={21} strokeWidth={2.2} />
        </span>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Biz<span className="text-indigo-600">Flow</span>
        </span>
      </Link>

      <nav aria-label="Navigation principale" className="px-3 pb-3 lg:px-4">
        <p className="hidden px-3 pb-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 lg:block">
          Menu principal
        </p>
        <ul className="flex gap-1 overflow-x-auto lg:flex-col">
          {Navsidebar.map((nav) => {
            const active =
              pathname === nav.chemin ||
              (nav.chemin !== "/dashboard" &&
                pathname.startsWith(`${nav.chemin}/`));
            const Icon = nav.icon;

            return (
              <li key={nav.id} className="shrink-0 lg:shrink">
                <Link
                  href={nav.chemin}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.9} />
                  <span>{nav.nom}</span>
                  {active && (
                    <span className="ml-auto hidden size-1.5 rounded-full bg-indigo-600 lg:block" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto hidden p-4 lg:block">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-3 flex size-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
            FM
          </div>
          <p className="text-sm font-semibold text-slate-800">Finoana Mirado</p>
          <p className="mt-0.5 text-xs text-slate-500">Administrateur</p>
          <Link
            href="/login"
            className="mt-4 flex items-center justify-between text-xs font-medium text-slate-500 transition hover:text-indigo-700"
          >
            Changer de compte
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </aside>
  );
}