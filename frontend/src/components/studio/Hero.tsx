import Image from "next/image"
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react"
import { tecnologias } from "@/data/portfolio"

const WHATSAPP = "https://wa.me/5532998359433"

const spec = [
	["STATUS", "disponível", true],
	["BASE", "Brasil · remoto", false],
	["FUNÇÃO", "Dev full-stack", false],
	["FOCO", "Web & Mobile", false],
	["EXPERIÊNCIA", "+5 anos", false],
	["STACK", "29 tecnologias", false],
] as const

export default function Hero() {
	const logos = tecnologias.filter((t) => t.destaque)
	const marquee = [...logos, ...logos, ...logos]

	return (
		<section id="inicio" className="relative overflow-hidden">
			{/* atmosphere */}
			<div className="bp-grid mask-radial absolute inset-0" />
			<div
				className="glow"
				style={{
					width: 620,
					height: 620,
					top: -160,
					left: "8%",
					background: "rgba(194,242,60,0.16)",
				}}
			/>
			<div
				className="glow"
				style={{
					width: 520,
					height: 520,
					top: 40,
					right: "2%",
					background: "rgba(60,160,242,0.10)",
				}}
			/>

			<div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-40">
				{/* left — headline */}
				<div className="lg:col-span-7">
					<div
						className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-3.5 py-1.5"
						style={{ animationDelay: "0ms" }}
					>
						<span className="dot-live h-1.5 w-1.5 rounded-full bg-lime" />
						<span className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
							Desenvolvedor full-stack
						</span>
					</div>

					<h1
						className="animate-fade-up mt-7 text-[2.7rem] font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl"
						style={{ animationDelay: "80ms" }}
					>
						Transformo ideias
						<br />
						em <span className="text-lime">sites</span> e
						<br />
						<span className="text-lime">aplicativos</span>.
					</h1>

					<p
						className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
						style={{ animationDelay: "160ms" }}
					>
						Sou o Guilherme, desenvolvedor full-stack. Do primeiro commit ao
						deploy, construo produtos digitais rápidos, bonitos e que as pessoas
						gostam de usar.
					</p>

					<div
						className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
						style={{ animationDelay: "240ms" }}
					>
						<a
							href="#estudio"
							className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-lime-2"
						>
							Ver acontecendo ao vivo
							<IconArrowDown
								size={17}
								className="transition-transform group-hover:translate-y-0.5"
							/>
						</a>
						<a
							href={WHATSAPP}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 rounded-full border border-line bg-panel/40 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-lime/40"
						>
							Iniciar um projeto
							<IconArrowUpRight
								size={17}
								className="text-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</a>
					</div>
				</div>

				{/* right — engineering spec panel */}
				<div className="lg:col-span-5">
					<div
						className="animate-fade-up overflow-hidden rounded-xl border border-line bg-panel/70 backdrop-blur-sm"
						style={{ animationDelay: "200ms" }}
					>
						<div className="flex items-center gap-2 border-b border-line bg-panel-2/60 px-4 py-2.5">
							<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
							<span className="ml-2 font-mono text-[11px] text-faint">
								guilherme — spec.json
							</span>
						</div>
						<dl className="divide-y divide-line font-mono text-sm">
							{spec.map(([k, v, live]) => (
								<div key={k} className="flex items-center justify-between px-4 py-3">
									<dt className="text-[11px] uppercase tracking-wider text-faint">
										{k}
									</dt>
									<dd className="flex items-center gap-2 text-ink">
										{live && <span className="dot-live h-1.5 w-1.5 rounded-full bg-lime" />}
										{v}
									</dd>
								</div>
							))}
						</dl>
					</div>
					<p className="mt-3 px-1 font-mono text-[11px] text-faint">
						{"// pronto para o próximo build"}
					</p>
				</div>
			</div>

			{/* marquee */}
			<div className="relative border-y border-line bg-panel/30 py-5">
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
				<div className="flex w-max marquee-track items-center gap-12 px-6">
					{marquee.map((t, i) => (
						<div key={i} className="flex items-center gap-2.5 opacity-70">
							<span className="relative h-6 w-6">
								<Image src={t.imagem} alt={t.nome} fill className="object-contain" />
							</span>
							<span className="font-mono text-sm text-dim">{t.nome}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
