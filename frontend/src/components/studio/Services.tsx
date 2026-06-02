import Image from "next/image"
import { IconWorld, IconDeviceMobile, IconApi, IconServer, IconCheck } from "@tabler/icons-react"
import { servicos, tecsPorIds } from "@/data/portfolio"
import SectionLabel from "./SectionLabel"
import Reveal from "./Reveal"

type Ic = React.ComponentType<{ size?: number; className?: string }>

const icones: Record<string, Ic> = {
	sites: IconWorld,
	apps: IconDeviceMobile,
	apis: IconApi,
	infra: IconServer,
}

export default function Services() {
	return (
		<section id="servicos" className="relative border-t border-line py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-5 sm:px-8">
				<SectionLabel n="03" text="Serviços" />
				<h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
					O que eu coloco <span className="text-lime">no ar</span> para você.
				</h2>
				<p className="mt-4 max-w-xl text-dim">
					Da ideia ao deploy, cuido de todas as camadas do produto — front-end,
					back-end, mobile e infraestrutura.
				</p>

				<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
					{servicos.map((s, i) => {
						const Icon = icones[s.id] ?? IconWorld
						return (
							<Reveal key={s.id} delay={i * 80}>
								<article className="group relative h-full overflow-hidden rounded-xl border border-line bg-panel p-6 transition-colors hover:border-lime/40 sm:p-8">
									<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									<div className="flex items-start justify-between">
										<span className="grid h-12 w-12 place-items-center rounded-lg border border-lime/30 bg-lime/10 text-lime">
											<Icon size={22} />
										</span>
										<span className="font-mono text-sm text-faint">{s.num}</span>
									</div>

									<h3 className="mt-6 text-xl font-semibold text-ink">{s.titulo}</h3>
									<p className="mt-2 text-sm leading-relaxed text-dim">{s.descricao}</p>

									<ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
										{s.itens.map((item) => (
											<li key={item} className="flex items-center gap-2 text-sm text-dim">
												<IconCheck size={14} className="shrink-0 text-lime" />
												{item}
											</li>
										))}
									</ul>

									<div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5">
										{tecsPorIds(s.tec).map((t) => (
											<span
												key={t.id}
												className="relative h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100"
												title={t.nome}
											>
												<Image src={t.imagem} alt={t.nome} fill className="object-contain" />
											</span>
										))}
									</div>
								</article>
							</Reveal>
						)
					})}
				</div>
			</div>
		</section>
	)
}
