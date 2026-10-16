import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, Mail, Lock, Eye, EyeOff, Sun, Moon, Calendar, Users, BarChart3,
  Brain, PawPrint, FileText, User, Building2, Check, Gift, Tag, ChevronDown, MessageCircle,
  Home, Wallet, Settings, Bell, Info,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EvoClin — Entrar e Cadastrar" },
      { name: "description", content: "Acesse sua clínica ou comece seu teste grátis no EvoClin, gestão que cuida." },
      { property: "og:title", content: "EvoClin — Gestão que cuida" },
      { property: "og:description", content: "Agenda, pacientes e finanças em uma plataforma para profissionais da saúde." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <div className="flex items-center gap-3">
      <div className={cn("grid place-items-center rounded-xl bg-gradient-primary font-extrabold shadow-glow", big ? "h-14 w-14 text-2xl" : "h-11 w-11 text-xl")}>E</div>
      <div>
        <div className={cn("font-bold tracking-tight", big ? "text-4xl" : "text-3xl")}>Evo<span className="text-gradient">Clin</span></div>
        {big && <div className="text-[10px] tracking-[0.4em] text-muted-foreground">GESTÃO QUE CUIDA</div>}
      </div>
    </div>
  );
}

function Field({ label, icon, type = "text", placeholder, toggle }: { label: string; icon: ReactNode; type?: string; placeholder: string; toggle?: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <div className="flex items-center gap-3 rounded-xl border border-input bg-secondary/60 px-4 py-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30">
        <span className="text-muted-foreground">{icon}</span>
        <input type={toggle && show ? "text" : type} placeholder={placeholder} className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        {toggle && (
          <button type="button" onClick={() => setShow(!show)} className="text-muted-foreground hover:text-foreground">
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </label>
  );
}

function PrimaryBtn({ children, onClick, className }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button onClick={onClick} className={cn("inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-[0.98]", className)}>
      {children}
    </button>
  );
}
function GhostBtn({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 font-medium transition hover:bg-accent">
      {children}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
  );
}

function Help() {
  return (
    <div className="mt-6 text-center">
      <p className="mb-3 text-sm font-medium">Precisa de ajuda?</p>
      <div className="flex justify-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"><MessageCircle size={16} /> WhatsApp</a>
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary/80 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"><Mail size={16} /> E-mail</a>
      </div>
    </div>
  );
}

function Index() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [dark, setDark] = useState(true);

  return (
    <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.1fr_1fr]">
      <Showcase />
      <div className="glass rounded-3xl p-7 shadow-glow md:p-9">
        <div className="mb-6 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={16} /> Voltar</button>
          <div className="flex rounded-full border border-border bg-secondary/50 p-1">
            <button onClick={() => setDark(false)} className={cn("rounded-full p-2", !dark && "bg-primary")}><Sun size={16} /></button>
            <button onClick={() => setDark(true)} className={cn("rounded-full p-2", dark && "bg-primary")}><Moon size={16} /></button>
          </div>
        </div>
        <div className="flex justify-center"><Logo /></div>
        <h1 className="mt-5 text-center text-2xl font-bold">{tab === "login" ? "Que bom ver você novamente!" : "Comece seu teste grátis"}</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          {tab === "login" ? "Acesse sua conta e continue cuidando do que importa." : "Leva menos de 2 minutos. Sem cartão de crédito."}
        </p>
        <div className="mt-6 grid grid-cols-2 rounded-xl border border-border bg-secondary/40 p-1">
          {(["login", "signup"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={cn("rounded-lg py-2.5 text-sm font-semibold transition", tab === t ? "bg-gradient-primary shadow-glow" : "text-muted-foreground hover:text-foreground")}>
              {t === "login" ? "Entrar" : "Cadastrar"}
            </button>
          ))}
        </div>
        <div key={tab} className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {tab === "login" ? <Login /> : <Signup onBack={() => setTab("login")} />}
        </div>
        <Help />
      </div>
    </div>
  );
}

function Showcase() {
  const features = [
    { icon: <Calendar />, t: "Agenda inteligente", d: "Organize atendimentos com mais agilidade e menos conflitos.", c: "bg-primary/20 text-primary-glow" },
    { icon: <Users />, t: "Gestão de pacientes", d: "Histórico completo e informações sempre à mão.", c: "bg-violet/20 text-violet" },
    { icon: <BarChart3 />, t: "Controle financeiro", d: "Acompanhe receita, despesas e o crescimento da clínica.", c: "bg-success/20 text-success" },
  ];
  return (
    <div className="hidden lg:block">
      <Logo size="lg" />
      <h2 className="mt-10 text-5xl font-extrabold leading-tight tracking-tight">Mais organização<br />para a <span className="text-gradient">sua clínica.</span></h2>
      <p className="mt-5 max-w-md text-lg text-muted-foreground">Centralize agenda, pacientes e finanças em uma plataforma feita para profissionais da saúde.</p>
      <div className="mt-8 space-y-5">
        {features.map((f) => (
          <div key={f.t} className="flex items-start gap-4">
            <div className={cn("grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border", f.c)}>{f.icon}</div>
            <div><h3 className="font-semibold">{f.t}</h3><p className="text-sm text-muted-foreground">{f.d}</p></div>
          </div>
        ))}
      </div>
      <MiniDashboard />
    </div>
  );
}

function MiniDashboard() {
  const bars = [20, 30, 25, 45, 40, 60, 55, 75, 70, 95];
  return (
    <div className="glass mt-10 flex gap-4 rounded-2xl p-4 text-xs">
      <div className="space-y-2 border-r border-border pr-4 text-muted-foreground">
        {[[Home, "Início"], [Calendar, "Agenda"], [Users, "Pacientes"], [Wallet, "Financeiro"], [Settings, "Config."]].map(([I, l], i) => {
          const Icon = I as typeof Home;
          return <div key={l as string} className={cn("flex items-center gap-2 rounded-md px-2 py-1.5", i === 0 && "bg-primary text-primary-foreground")}><Icon size={13} />{l as string}</div>;
        })}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between"><span className="font-semibold">Boa tarde, Dra. Ana 👋</span><Bell size={13} /></div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[["12", "Atendimentos", "+20%"], ["28", "Novos pacientes", "+12%"], ["R$ 4.230", "Receita", "+18%"]].map(([v, l, p]) => (
            <div key={l} className="rounded-lg bg-secondary/60 p-2"><div className="text-base font-bold">{v}</div><div className="text-muted-foreground">{l}</div><div className="text-success">{p}</div></div>
          ))}
        </div>
        <div className="mt-3 flex h-14 items-end gap-1">
          {bars.map((h, i) => <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary to-success" style={{ height: `${h}%` }} />)}
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Field label="E-mail" icon={<Mail size={18} />} type="email" placeholder="seu@email.com" />
      <Field label="Senha" icon={<Lock size={18} />} type="password" placeholder="••••••••" toggle />
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="h-4 w-4 accent-primary" /> Manter conectado</label>
        <a href="#" className="text-primary-glow hover:underline">Esqueceu a senha?</a>
      </div>
      <PrimaryBtn className="w-full">Acessar <ArrowRight size={18} /></PrimaryBtn>
      <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px flex-1 bg-border" />ou continue com<div className="h-px flex-1 bg-border" /></div>
      <button type="button" className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-secondary/40 py-3 font-medium transition hover:bg-accent"><GoogleIcon /> Entrar com Google</button>
    </form>
  );
}

function OptionCard({ selected, onClick, icon, iconClass, title, desc }: { selected: boolean; onClick: () => void; icon: ReactNode; iconClass: string; title: string; desc: string }) {
  return (
    <button type="button" onClick={onClick} className={cn("relative flex items-center gap-4 rounded-2xl border p-4 text-left transition", selected ? "border-primary bg-primary/10 shadow-glow" : "border-border bg-secondary/30 hover:border-primary/50")}>
      <div className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-xl", iconClass)}>{icon}</div>
      <div className="pr-6"><div className="font-semibold">{title}</div><div className="text-xs text-muted-foreground">{desc}</div></div>
      <span className={cn("absolute right-4 top-4 grid h-5 w-5 place-items-center rounded-full border-2", selected ? "border-primary bg-primary" : "border-muted-foreground")}>{selected && <span className="h-2 w-2 rounded-full bg-primary-foreground" />}</span>
    </button>
  );
}

function Banner({ title, desc }: { title: ReactNode; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/25 to-transparent p-5">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Signup({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState<"psi" | "vet">("vet");
  const [mode, setMode] = useState<"solo" | "team">("solo");
  const [plan, setPlan] = useState<"trial" | "base">("trial");
  const [code, setCode] = useState(false);
  const steps = ["Sua área", "Sua conta", "Seu plano"];

  return (
    <div className="space-y-5">
      <div className="flex items-center">
        {steps.map((s, i) => {
          const n = i + 1;
          const done = step > n, active = step === n;
          return (
            <div key={s} className={cn("flex items-center", i < 2 && "flex-1")}>
              <div className="flex flex-col items-center gap-1">
                <div className={cn("grid h-8 w-8 place-items-center rounded-full border text-sm font-semibold transition", done || active ? "border-primary bg-primary" : "border-border text-muted-foreground")}>{done ? <Check size={16} /> : n}</div>
                <span className={cn("text-xs", active ? "font-semibold" : "text-muted-foreground")}>{s}</span>
              </div>
              {i < 2 && <div className={cn("mx-2 mb-5 h-0.5 flex-1 rounded", step > n ? "bg-primary" : "bg-border")} />}
            </div>
          );
        })}
      </div>

      <div key={step} className="space-y-4 animate-in fade-in slide-in-from-right-3 duration-300">
        {step === 1 && (<>
          <Banner title={<>Mais organização para você. Mais <span className="text-gradient">cuidado</span> para eles.</>} desc="O EvoClin simplifica sua rotina e cuida dos seus pacientes em um só lugar." />
          <h3 className="font-bold">Qual é sua área de atuação?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <OptionCard selected={area === "psi"} onClick={() => setArea("psi")} icon={<Brain />} iconClass="bg-violet/25 text-violet" title="Psicologia" desc="Ferramentas para saúde mental." />
            <OptionCard selected={area === "vet"} onClick={() => setArea("vet")} icon={<PawPrint />} iconClass="bg-primary/25 text-primary-glow" title="Veterinária" desc="Recursos para o cuidado animal." />
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {[[Calendar, "Agenda personalizada"], [FileText, "Prontuário específico"], [Users, "Atendimento eficiente"]].map(([I, t]) => {
              const Icon = I as typeof Calendar;
              return <div key={t as string} className="flex items-center gap-2 rounded-xl bg-secondary/40 p-2.5"><Icon size={16} className="shrink-0 text-primary-glow" />{t as string}</div>;
            })}
          </div>
        </>)}

        {step === 2 && (<>
          <Banner title={<>Vamos criar <span className="text-gradient">sua conta</span></>} desc="Quase lá! Preencha seus dados para configurar seu espaço." />
          <h3 className="font-bold">Como você vai usar o EvoClin?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <OptionCard selected={mode === "solo"} onClick={() => setMode("solo")} icon={<User />} iconClass="bg-primary/25 text-primary-glow" title="Atendo sozinho" desc="Consultório individual." />
            <OptionCard selected={mode === "team"} onClick={() => setMode("team")} icon={<Users />} iconClass="bg-primary/25 text-primary-glow" title="Clínica / equipe" desc="Vários profissionais." />
          </div>
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-secondary/40 py-3 text-sm font-medium hover:bg-accent"><GoogleIcon /> Continuar com Google</button>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome completo" icon={<User size={18} />} placeholder="Ex.: Dra. Ana Silva" />
            <Field label="E-mail" icon={<Mail size={18} />} type="email" placeholder="seu@email.com" />
            <Field label="Senha" icon={<Lock size={18} />} type="password" placeholder="Crie uma senha" toggle />
            <Field label="Confirmar senha" icon={<Lock size={18} />} type="password" placeholder="Repita sua senha" toggle />
          </div>
          <Field label="Nome da clínica ou profissional" icon={<Building2 size={18} />} placeholder="Ex.: Clínica Vida Plena" />
          <p className="flex items-center gap-2 text-xs text-muted-foreground"><Info size={14} /> Pode ser o nome da clínica ou o seu nome como autônomo.</p>
        </>)}

        {step === 3 && (<>
          <Banner title="Você está a um passo de começar! 🚀" desc="Teste, evolua e mude de plano quando quiser." />
          <div className="grid gap-3 sm:grid-cols-2">
            {([
              ["trial", "Teste grátis", "7 dias • Sem cartão", ["1 unidade", "Até 2 usuários", "Agenda completa", "Suporte por e-mail"]],
              ["base", "Plano Base", "R$ 40,00/mês", ["1 unidade incluída", "Até 5 usuários", "Funcionários e permissões", "Relatórios e financeiro"]],
            ] as const).map(([id, t, p, items]) => (
              <button key={id} type="button" onClick={() => setPlan(id)} className={cn("relative rounded-2xl border p-5 text-left transition", plan === id ? "border-primary bg-primary/10 shadow-glow" : "border-border bg-secondary/30 hover:border-primary/50")}>
                {id === "trial" && <span className="mb-2 inline-block rounded-md bg-primary px-2 py-0.5 text-xs font-semibold">Mais popular</span>}
                <div className="text-lg font-bold">{t}</div>
                <div className="text-sm text-primary-glow">{p}</div>
                <ul className="mt-3 space-y-1.5 text-sm">{items.map((i) => <li key={i} className="flex items-center gap-2"><Check size={14} className="text-primary-glow" />{i}</li>)}</ul>
                <span className={cn("absolute right-4 top-4 grid h-5 w-5 place-items-center rounded-full border-2", plan === id ? "border-primary bg-primary" : "border-muted-foreground")}>{plan === id && <Check size={12} />}</span>
              </button>
            ))}
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-3 text-sm">
            <Gift className="shrink-0 text-primary-glow" size={20} />
            <span>{plan === "trial" ? "Acesso completo por 7 dias, sem cartão de crédito." : "Cobrança mensal, cancele quando quiser."}</span>
          </div>
          <div className="rounded-xl border border-border bg-secondary/30">
            <button type="button" onClick={() => setCode(!code)} className="flex w-full items-center gap-2 p-3 text-sm text-primary-glow"><Tag size={16} /> Tenho um código de indicação <ChevronDown size={16} className={cn("ml-auto transition", code && "rotate-180")} /></button>
            {code && <div className="px-3 pb-3"><input placeholder="Digite o código" className="w-full rounded-lg border border-input bg-secondary/60 px-3 py-2 text-sm outline-none focus:border-primary" /></div>}
          </div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="h-4 w-4 accent-primary" /> Li e aceito os <a href="#" className="text-primary-glow hover:underline">termos de uso</a></label>
        </>)}
      </div>

      <div className="flex justify-between border-t border-border pt-5">
        <GhostBtn onClick={() => (step === 1 ? onBack() : setStep(step - 1))}><ArrowLeft size={16} /> Voltar</GhostBtn>
        <PrimaryBtn onClick={() => step < 3 && setStep(step + 1)}>{step === 3 ? "Começar agora" : "Continuar"} <ArrowRight size={16} /></PrimaryBtn>
      </div>
    </div>
  );
}
