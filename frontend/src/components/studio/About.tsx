import Image from "next/image"
import SectionLabel from "./SectionLabel"
import Reveal from "./Reveal"
import Counter from "./Counter"

const BIO =
	"Sou um desenvolvedor formado como analista e desenvolvedor de sistemas, comprometido em participar ativamente da criação e aprimoramento de projetos. Conduzo pesquisas e implemento novas funcionalidades usando uma ampla gama de linguagens. Além disso, sou habilidoso em infraestrutura, dominando ferramentas DevOps essenciais para a gestão e o controle de servidores, na nuvem ou físicos, e atuo diretamente na integração entre plataformas via APIs. Estou sempre aberto a novos desafios e dedico-me a estudar as tendências mais recentes — meu objetivo é entregar soluções inovadoras e de alta qualidade."

const stats = [
	{ prefix: "+", value: 5, suffix: "", label: "Anos de experiência" },
	{ prefix: "+", value: 20, suffix: "", label: "Projetos entregues" },
	{ prefix: "+", value: 420, suffix: "h", label: "Horas de desenvolvimento" },
]

export default function About() {
	return (
		<section id="sobre" className="relative border-t border-line py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-5 sm:px-8">
				<SectionLabel n="04" text="Sobre" />
				<div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
					{/* photo */}
					<Reveal className="lg:col-span-5">
						<div className="relative">
							<div
								className="glow"
								style={{
									width: 280,
									height: 280,
									top: 24,
									left: 24,
									background: "rgba(194,242,60,0.12)",
								}}
							/>
							<div className="relative overflow-hidden rounded-2xl border border-line bg-panel">
								<div className="flex items-center justify-between border-b border-line bg-panel-2/60 px-4 py-2">
									<span className="font-mono text-[11px] text-faint">guilherme.jpg</span>
									<span className="flex items-center gap-1.5 font-mono text-[11px] text-lime">
										<span className="dot-live h-1.5 w-1.5 rounded-full bg-lime" /> online
									</span>
								</div>
								<div className="relative aspect-[4/5] w-full">
									<Image
										src="/minha-foto.jpg"
										alt="Guilherme Louback"
										fill
										className="object-cover"
									/>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
								</div>
							</div>
						</div>
					</Reveal>

					{/* text */}
					<div className="lg:col-span-7">
						<Reveal delay={80}>
							<h2 className="text-3xl font-bold text-ink sm:text-4xl">
								Olá, sou o <span className="text-lime">Guilherme Louback</span>.
							</h2>
							<p className="mt-3 text-dim">
								Desenvolvedor full-stack — sites e aplicativos.
							</p>
							<p className="mt-6 max-w-2xl leading-relaxed text-dim">{BIO}</p>
						</Reveal>

						<Reveal delay={160}>
							<div className="mt-9 grid grid-cols-3 gap-3 sm:gap-4">
								{stats.map((s) => (
									<div key={s.label} className="rounded-xl border border-line bg-panel p-4 sm:p-5">
										<div className="font-display text-3xl font-extrabold text-lime sm:text-4xl">
											<Counter prefix={s.prefix} value={s.value} suffix={s.suffix} />
										</div>
										<div className="mt-1 text-xs leading-snug text-dim sm:text-sm">
											{s.label}
										</div>
									</div>
								))}
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}
