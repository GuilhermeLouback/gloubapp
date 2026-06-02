"use client"
import { useEffect, useRef, useState } from "react"
import {
	IconWorld,
	IconDeviceMobile,
	IconCheck,
	IconArrowUpRight,
	IconArrowDownLeft,
	IconHome2,
	IconChartBar,
	IconCreditCard,
	IconUser,
	IconBolt,
	IconShield,
	IconHeart,
	IconMusic,
	IconCash,
	IconShoppingBag,
} from "@tabler/icons-react"
import SectionLabel from "./SectionLabel"

type Ic = React.ComponentType<{ size?: number; className?: string }>
type Tok = [string, string?]

const SITE: Tok[][] = [
	[["export ", "t-k"], ["default ", "t-k"], ["function ", "t-k"], ["Site", "t-t"], ["() {", "t-p"]],
	[["  return ", "t-k"], ["(", "t-p"]],
	[["    <", "t-p"], ["main", "t-t"], [" className", "t-a"], ["=", "t-p"], ['"page"', "t-s"], [">", "t-p"]],
	[["      <", "t-p"], ["Navbar", "t-t"], [" brand", "t-a"], ["=", "t-p"], ['"Aurora"', "t-s"], [" />", "t-p"]],
	[["      <", "t-p"], ["Hero", "t-t"]],
	[["        title", "t-a"], ["=", "t-p"], ['"Crie sem limites"', "t-s"]],
	[["        action", "t-a"], ["=", "t-p"], ['"Começar agora"', "t-s"], [" />", "t-p"]],
	[["      <", "t-p"], ["Features", "t-t"], [" cols", "t-a"], ["=", "t-p"], ["{3}", "t-n"], [" />", "t-p"]],
	[["      <", "t-p"], ["Pricing", "t-t"], [" plano", "t-a"], ["=", "t-p"], ['"Pro"', "t-s"], [" />", "t-p"]],
	[["      <", "t-p"], ["Footer", "t-t"], [" ano", "t-a"], ["=", "t-p"], ["{2026}", "t-n"], [" />", "t-p"]],
	[["    </", "t-p"], ["main", "t-t"], [">", "t-p"]],
	[["  )", "t-p"]],
	[["}", "t-p"]],
]

const APP: Tok[][] = [
	[["export ", "t-k"], ["function ", "t-k"], ["App", "t-t"], ["() {", "t-p"]],
	[["  return ", "t-k"], ["(", "t-p"]],
	[["    <", "t-p"], ["Screen", "t-t"], [" tema", "t-a"], ["=", "t-p"], ['"dark"', "t-s"], [">", "t-p"]],
	[["      <", "t-p"], ["Status", "t-t"], [" hora", "t-a"], ["=", "t-p"], ['"9:41"', "t-s"], [" />", "t-p"]],
	[["      <", "t-p"], ["Saldo", "t-t"], [" valor", "t-a"], ["=", "t-p"], ['"R$ 12.480"', "t-s"], [" />", "t-p"]],
	[["      <", "t-p"], ["Acoes", "t-t"], [" a", "t-a"], ["=", "t-p"], ['"Enviar"', "t-s"], [" b", "t-a"], ["=", "t-p"], ['"Receber"', "t-s"], [" />", "t-p"]],
	[["      <", "t-p"], ["Lista", "t-t"], [">", "t-p"]],
	[["        <", "t-p"], ["Item", "t-t"], [" nome", "t-a"], ["=", "t-p"], ['"Spotify"', "t-s"], [" v", "t-a"], ["=", "t-p"], ['"-39,90"', "t-s"], [" />", "t-p"]],
	[["        <", "t-p"], ["Item", "t-t"], [" nome", "t-a"], ["=", "t-p"], ['"Salário"', "t-s"], [" v", "t-a"], ["=", "t-p"], ['"+5.200"', "t-s"], [" />", "t-p"]],
	[["        <", "t-p"], ["Item", "t-t"], [" nome", "t-a"], ["=", "t-p"], ['"iFood"', "t-s"], [" v", "t-a"], ["=", "t-p"], ['"-72,40"', "t-s"], [" />", "t-p"]],
	[["      </", "t-p"], ["Lista", "t-t"], [">", "t-p"]],
	[["      <", "t-p"], ["TabBar", "t-t"], [" ativo", "t-a"], ["=", "t-p"], ['"home"', "t-s"], [" />", "t-p"]],
	[["    </", "t-p"], ["Screen", "t-t"], [">", "t-p"]],
	[["  )", "t-p"]],
	[["}", "t-p"]],
]

export default function BuildSimulation() {
	const [mode, setMode] = useState<"site" | "app">("site")
	const [step, setStep] = useState(0)
	const [active, setActive] = useState(false)
	const rootRef = useRef<HTMLDivElement>(null)

	const lines = mode === "site" ? SITE : APP
	const total = lines.length
	const done = step >= total
	const pct = Math.min(100, Math.round((step / total) * 100))

	useEffect(() => {
		const el = rootRef.current
		if (!el) return
		const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), {
			threshold: 0.2,
		})
		io.observe(el)
		return () => io.disconnect()
	}, [])

	useEffect(() => {
		const reduce =
			typeof window !== "undefined" &&
			window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
		if (reduce) {
			setStep(total)
			return
		}
		if (!active) return
		if (step < total) {
			const id = setTimeout(() => setStep((s) => s + 1), step === 0 ? 280 : 360)
			return () => clearTimeout(id)
		}
		const id = setTimeout(() => setStep(0), 2800)
		return () => clearTimeout(id)
	}, [active, step, total])

	function switchMode(m: "site" | "app") {
		if (m === mode) return
		setMode(m)
		setStep(0)
	}

	const cfg =
		mode === "site"
			? { file: "Site.tsx", lang: "react", label: "aurora.studio" }
			: { file: "App.tsx", lang: "react native", label: "Finance App" }

	return (
		<section
			id="estudio"
			ref={rootRef}
			className="relative border-t border-line py-20 sm:py-28"
		>
			<div className="mx-auto max-w-7xl px-5 sm:px-8">
				{/* header */}
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<SectionLabel n="02" text="Estúdio" />
						<h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
							Do código ao produto, <span className="text-lime">em tempo real.</span>
						</h2>
						<p className="mt-4 max-w-xl text-dim">
							É assim que eu trabalho: cada linha de código vira interface. Escolha um
							alvo e veja a construção acontecer.
						</p>
					</div>
					<div className="inline-flex shrink-0 self-start rounded-full border border-line bg-panel p-1 lg:self-auto">
						<Tab active={mode === "site"} onClick={() => switchMode("site")} icon={IconWorld}>
							Website
						</Tab>
						<Tab active={mode === "app"} onClick={() => switchMode("app")} icon={IconDeviceMobile}>
							Aplicativo
						</Tab>
					</div>
				</div>

				{/* studio */}
				<div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
					{/* editor */}
					<div className="overflow-hidden rounded-xl border border-line bg-panel">
						<div className="flex items-center justify-between border-b border-line bg-panel-2/60 px-4 py-2.5">
							<div className="flex items-center gap-2">
								<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
								<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
								<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
								<span className="ml-2 font-mono text-[11px] text-faint">{cfg.file}</span>
							</div>
							<span className="font-mono text-[11px] text-faint">{cfg.lang}</span>
						</div>
						<div className="relative min-h-[392px] py-3">
							{lines.slice(0, step).map((line, i) => (
								<div key={i} className="flex gap-4 px-4">
									<span className="w-5 shrink-0 select-none text-right font-mono text-[12px] leading-6 text-faint/50">
										{i + 1}
									</span>
									<code className="whitespace-pre font-mono text-[12.5px] leading-6">
										{line.map((tok, j) => (
											<span key={j} className={tok[1]}>
												{tok[0]}
											</span>
										))}
										{i === step - 1 && !done && <span className="caret ml-0.5" />}
									</code>
								</div>
							))}
						</div>
						<div className="flex items-center justify-between gap-4 border-t border-line bg-panel-2/60 px-4 py-2.5">
							<div className="flex items-center gap-2 font-mono text-[11px]">
								{done ? (
									<>
										<IconCheck size={13} className="text-lime" />
										<span className="text-lime">build concluído · deploy ok</span>
									</>
								) : (
									<>
										<span className="dot-live h-1.5 w-1.5 rounded-full bg-lime" />
										<span className="text-dim">compilando módulos…</span>
									</>
								)}
							</div>
							<span className="font-mono text-[11px] text-faint">{pct}%</span>
						</div>
						<div className="h-0.5 w-full bg-line">
							<div
								className="h-full bg-lime transition-all duration-300"
								style={{ width: `${pct}%` }}
							/>
						</div>
					</div>

					{/* preview */}
					<div className="relative overflow-hidden rounded-xl border border-line bg-bg-2">
						<div className="bp-grid-sm absolute inset-0 opacity-40" />
						<div className="absolute right-4 top-3 z-10 font-mono text-[10px] uppercase tracking-wider text-faint">
							preview
						</div>
						<div className="relative grid min-h-[392px] place-items-center p-5">
							{mode === "site" ? (
								<div className="w-full max-w-md overflow-hidden rounded-lg border border-line bg-panel shadow-2xl">
									<div className="flex items-center gap-2 border-b border-line bg-panel-2 px-3 py-2">
										<span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
										<span className="h-2 w-2 rounded-full bg-[#febc2e]" />
										<span className="h-2 w-2 rounded-full bg-[#28c840]" />
										<span className="ml-2 flex-1 rounded bg-bg px-2 py-0.5 text-center font-mono text-[10px] text-faint">
											{cfg.label}
										</span>
									</div>
									<div className="min-h-[300px]">
										<SitePreview step={step} />
									</div>
								</div>
							) : (
								<div className="relative w-[230px] overflow-hidden rounded-[2rem] border-[6px] border-panel-2 bg-panel shadow-2xl">
									<div className="absolute left-1/2 top-0 z-10 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-panel-2" />
									<div className="min-h-[420px] pt-4">
										<AppPreview step={step} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function Tab({
	active,
	onClick,
	icon: Icon,
	children,
}: {
	active: boolean
	onClick: () => void
	icon: Ic
	children: React.ReactNode
}) {
	return (
		<button
			onClick={onClick}
			className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
				active ? "bg-lime text-bg" : "text-dim hover:text-ink"
			}`}
		>
			<Icon size={15} />
			{children}
		</button>
	)
}

function SitePreview({ step }: { step: number }) {
	const features: Ic[] = [IconBolt, IconShield, IconHeart]
	return (
		<div className="flex h-full flex-col gap-3 p-4 text-[10px]">
			{step >= 4 && (
				<div className="bp-part flex items-center justify-between">
					<div className="flex items-center gap-1.5">
						<span className="h-2.5 w-2.5 rounded-sm bg-lime" />
						<span className="font-semibold text-ink">Aurora</span>
					</div>
					<div className="flex items-center gap-2 text-faint">
						<span>Recursos</span>
						<span>Preços</span>
						<span className="rounded-full bg-lime px-2 py-0.5 font-semibold text-bg">
							Entrar
						</span>
					</div>
				</div>
			)}
			{step >= 7 && (
				<div className="bp-part mt-1 flex flex-col items-center gap-2 py-3 text-center">
					<div className="text-sm font-extrabold leading-tight text-ink">
						Crie sem limites
					</div>
					<div className="h-1 w-32 rounded bg-line" />
					<div className="h-1 w-24 rounded bg-line" />
					<span className="mt-1 rounded-full bg-lime px-3 py-1 font-semibold text-bg">
						Começar agora
					</span>
				</div>
			)}
			{step >= 8 && (
				<div className="bp-part grid grid-cols-3 gap-2">
					{features.map((Icon, i) => (
						<div
							key={i}
							className="flex flex-col items-center gap-1 rounded-lg border border-line bg-panel-2 p-2"
						>
							<Icon size={14} className="text-lime" />
							<div className="h-1 w-8 rounded bg-line" />
							<div className="h-1 w-6 rounded bg-line/60" />
						</div>
					))}
				</div>
			)}
			{step >= 9 && (
				<div className="bp-part flex items-center justify-between rounded-lg border border-lime/40 bg-lime/5 p-2.5">
					<div className="flex flex-col gap-1">
						<span className="font-semibold text-ink">Plano Pro</span>
						<div className="h-1 w-16 rounded bg-line" />
					</div>
					<span className="rounded-full bg-lime px-2 py-0.5 font-bold text-bg">R$ 49</span>
				</div>
			)}
			{step >= 10 && (
				<div className="bp-part mt-auto flex items-center justify-between border-t border-line pt-2 text-faint">
					<span>© 2026 Aurora</span>
					<div className="flex gap-1">
						<span className="h-2 w-2 rounded-full bg-line" />
						<span className="h-2 w-2 rounded-full bg-line" />
						<span className="h-2 w-2 rounded-full bg-line" />
					</div>
				</div>
			)}
		</div>
	)
}

function AppPreview({ step }: { step: number }) {
	return (
		<div className="flex h-full flex-col gap-2.5 p-3 text-[10px]">
			{step >= 4 && (
				<div className="bp-part flex items-center justify-between px-1 text-ink">
					<span className="font-semibold">9:41</span>
					<div className="flex items-center gap-0.5">
						<span className="h-2 w-1 rounded-sm bg-ink/70" />
						<span className="h-2.5 w-1 rounded-sm bg-ink/70" />
						<span className="h-3 w-1 rounded-sm bg-ink/70" />
						<span className="ml-1 h-2 w-4 rounded-sm border border-ink/60" />
					</div>
				</div>
			)}
			{step >= 5 && (
				<div className="bp-part rounded-2xl bg-gradient-to-br from-lime to-lime-dim p-3 text-bg">
					<div className="text-[9px] font-medium opacity-80">Saldo disponível</div>
					<div className="mt-0.5 text-lg font-extrabold">R$ 12.480</div>
				</div>
			)}
			{step >= 6 && (
				<div className="bp-part grid grid-cols-2 gap-2">
					<div className="flex items-center justify-center gap-1 rounded-xl border border-line bg-panel-2 py-2 text-ink">
						<IconArrowUpRight size={13} className="text-lime" /> Enviar
					</div>
					<div className="flex items-center justify-center gap-1 rounded-xl border border-line bg-panel-2 py-2 text-ink">
						<IconArrowDownLeft size={13} className="text-lime" /> Receber
					</div>
				</div>
			)}
			{step >= 7 && (
				<div className="bp-part flex items-center justify-between px-1 pt-1 text-faint">
					<span className="font-semibold uppercase tracking-wide">Transações</span>
					<span>ver todas</span>
				</div>
			)}
			<div className="flex flex-col gap-1.5">
				{step >= 8 && <Row icon={IconMusic} name="Spotify" v="-39,90" neg />}
				{step >= 9 && <Row icon={IconCash} name="Salário" v="+5.200" />}
				{step >= 10 && <Row icon={IconShoppingBag} name="iFood" v="-72,40" neg />}
			</div>
			{step >= 12 && (
				<div className="bp-part mt-auto flex items-center justify-around rounded-2xl border border-line bg-panel-2 py-2.5">
					<IconHome2 size={16} className="text-lime" />
					<IconChartBar size={16} className="text-faint" />
					<IconCreditCard size={16} className="text-faint" />
					<IconUser size={16} className="text-faint" />
				</div>
			)}
		</div>
	)
}

function Row({
	icon: Icon,
	name,
	v,
	neg,
}: {
	icon: Ic
	name: string
	v: string
	neg?: boolean
}) {
	return (
		<div className="bp-part flex items-center gap-2 rounded-xl border border-line bg-panel-2 px-2 py-2">
			<span className="grid h-6 w-6 place-items-center rounded-full bg-bg text-ink">
				<Icon size={12} />
			</span>
			<span className="flex-1 text-ink">{name}</span>
			<span className={neg ? "text-ink/55" : "text-lime"}>{v}</span>
		</div>
	)
}
