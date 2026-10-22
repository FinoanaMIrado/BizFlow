"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    setIsPending(true);

    const endpoint = isRecovery
      ? "/api/auth/forgot-password"
      : "/api/auth/login";
    const body = isRecovery ? { email } : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        if (response.status === 404) {
          setError("Ce service n’est pas encore disponible.");
        } else if (response.status === 401 || response.status === 403) {
          setError("Identifiants incorrects. Vérifiez votre adresse et votre mot de passe.");
        } else {
          setError("Une erreur est survenue. Veuillez réessayer dans un instant.");
        }
        return;
      }

      if (isRecovery) {
        setNotice(
          "Si cette adresse est associée à un compte, vous recevrez les instructions de récupération.",
        );
      } else {
        router.replace("/dashboard");
      }
    } catch {
      setError("Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.");
    } finally {
      setIsPending(false);
    }
  }

  function changeMode(recovery: boolean) {
    setIsRecovery(recovery);
    setError("");
    setNotice("");
  }

  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,0.95fr)]">
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-7 text-white sm:px-10 sm:py-9 lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:px-14 lg:py-12 xl:px-20">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 -z-10 size-[28rem] rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-32 -z-10 size-[28rem] rounded-full bg-violet-600/20 blur-3xl"
        />

        <Link
          href="/"
          className="inline-flex w-fit items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
          aria-label="BizFlow, accueil"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-950/40">
            <Boxes size={23} strokeWidth={2.1} />
          </span>
          <span className="text-[21px] font-bold tracking-tight">
            Biz<span className="text-indigo-300">Flow</span>
          </span>
        </Link>

        <div className="relative mt-12 max-w-xl lg:my-auto lg:py-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-200">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Votre espace de gestion
          </div>
          <h1 className="max-w-lg text-[32px] font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px]">
            Chaque journée,{" "}
            <span className="text-indigo-300">plus simple à piloter.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Retrouvez vos clients, vos commandes et vos paiements au même
            endroit. Votre activité avance, vous gardez le cap.
          </p>

          <div className="mt-9 hidden max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-sm sm:block lg:mt-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Vue d’ensemble
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Votre entreprise, en un coup d’œil
                </p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-400/15 text-indigo-200">
                <ShieldCheck size={18} />
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-slate-900/50 p-3.5">
                <p className="text-xs text-slate-400">Commandes suivies</p>
                <p className="mt-1.5 text-xl font-semibold tracking-tight">
                  En temps réel
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-slate-900/50 p-3.5">
                <p className="text-xs text-slate-400">Données centralisées</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold">
                  <Check size={15} className="text-emerald-400" />
                  Tout est à jour
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 hidden text-xs text-slate-500 lg:block">
          © 2026 BizFlow · La gestion de votre entreprise, simplement.
        </p>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-10 lg:px-12">
        <div className="w-full max-w-[410px]">
          <div className="mb-9 flex items-center gap-2 text-xs font-medium text-slate-400">
            <LockKeyhole size={14} className="text-indigo-500" />
            Connexion sécurisée à votre espace
          </div>

          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold text-indigo-600">
              {isRecovery ? "Récupération du compte" : "Bon retour parmi nous"}
            </p>
            <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
              {isRecovery ? "Mot de passe oublié ?" : "Connectez-vous"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {isRecovery
                ? "Saisissez l’adresse e-mail associée à votre compte pour recevoir les instructions."
                : "Accédez à votre espace BizFlow avec vos identifiants."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Adresse e-mail
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="vous@entreprise.com"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {!isRecovery && (
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Mot de passe
                  </label>
                  <button
                    type="button"
                    onClick={() => changeMode(true)}
                    className="text-xs font-semibold text-indigo-600 transition hover:text-indigo-800 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
                <div className="relative">
                  <LockKeyhole
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Votre mot de passe"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={
                      showPassword
                        ? "Masquer le mot de passe"
                        : "Afficher le mot de passe"
                    }
                    aria-pressed={showPassword}
                    className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-5 text-rose-700"
              >
                {error}
              </p>
            )}
            {notice && (
              <p
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-5 text-emerald-700"
              >
                {notice}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/15 transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending
                ? "Veuillez patienter..."
                : isRecovery
                  ? "Envoyer les instructions"
                  : "Se connecter"}
              {!isPending && <ArrowRight size={17} />}
            </button>
          </form>

          {isRecovery ? (
            <button
              type="button"
              onClick={() => changeMode(false)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <ArrowLeft size={16} />
              Retour à la connexion
            </button>
          ) : (
            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              L’accès est réservé aux membres de votre équipe.{" "}
              <br className="sm:hidden" />
              Besoin d’aide ? Contactez votre administrateur.
            </p>
          )}

          <p className="mt-12 text-center text-xs text-slate-400 lg:hidden">
            © 2026 BizFlow · Tous droits réservés
          </p>
        </div>
      </section>
    </main>
  );
}
