import Image from "next/image"
import { grupos, tecsPorIds } from "@/data/portfolio"
import SectionLabel from "./SectionLabel"
import Reveal from "./Reveal"

export default function Stack() {
	return (
		<section id="stack" className="relative border-t border-line py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-5 sm:px-8">
				<SectionLabel n="05" text="Stack" />
				<h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
					Ferramentas que eu uso para <span className="text-lime">construir</span>.
				</h2>

				<div className="mt-10 flex flex-col divide-y divide-line">
					{grupos.map((g, gi) => (
						<Reveal key={g.titulo} delay={gi * 60}>
							<div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:gap-8">
								<div className="lg:col-span-3">
									<span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
										{String(gi + 1).padStart(2, "0")}
									</span>
									<h3 className="mt-1 text-xl font-semibold text-ink">{g.titulo}</h3>
								</div>
								<div className="flex flex-wrap gap-2.5 lg:col-span-9">
									{tecsPorIds(g.ids).map((t) => (
										<div
											key={t.id}
											className="group flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 transition-all hover:-translate-y-0.5 hover:border-lime/40"
										>
											<span className="relative h-5 w-5">
												<Image src={t.imagem} alt={t.nome} fill className="object-contain" />
											</span>
											<span className="text-sm text-dim transition-colors group-hover:text-ink">
												{t.nome}
											</span>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}
