const links = [
	{ href: "#inicio", label: "Início" },
	{ href: "#estudio", label: "Estúdio" },
	{ href: "#servicos", label: "Serviços" },
	{ href: "#sobre", label: "Sobre" },
	{ href: "#stack", label: "Stack" },
	{ href: "#contato", label: "Contato" },
]

export default function Footer() {
	return (
		<footer className="border-t border-line bg-bg">
			<div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
				<div className="flex items-center gap-2.5">
					<span className="grid h-8 w-8 place-items-center rounded-md border border-lime/40 bg-lime/10 font-mono text-sm font-bold text-lime">
						GL
					</span>
					<div className="leading-tight">
						<div className="text-sm font-semibold text-ink">Guilherme Louback</div>
						<div className="font-mono text-[11px] text-faint">
							desenvolvedor · sites & apps
						</div>
					</div>
				</div>

				<nav className="flex flex-wrap gap-x-5 gap-y-2">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="text-sm text-dim transition-colors hover:text-lime"
						>
							{l.label}
						</a>
					))}
				</nav>
			</div>
			<div className="border-t border-line">
				<div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
					<p className="font-mono text-[11px] text-faint">
						© 2026 Guilherme Louback — todos os direitos reservados.
					</p>
					<p className="font-mono text-[11px] text-faint">
						feito com <span className="text-lime">Next.js</span> & café
					</p>
				</div>
			</div>
		</footer>
	)
}
