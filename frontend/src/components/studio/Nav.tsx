"use client"
import { useEffect, useState } from "react"
import { IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react"

const links = [
	{ href: "#inicio", label: "Início", n: "01" },
	{ href: "#estudio", label: "Estúdio", n: "02" },
	{ href: "#servicos", label: "Serviços", n: "03" },
	{ href: "#sobre", label: "Sobre", n: "04" },
	{ href: "#stack", label: "Stack", n: "05" },
]

const WHATSAPP = "https://wa.me/5532998359433"
const LINKEDIN = "https://www.linkedin.com/in/guilherme-louback-45b530218/"

export default function Nav() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				scrolled
					? "border-b border-line bg-bg/80 backdrop-blur-xl"
					: "border-b border-transparent bg-transparent"
			}`}
		>
			<div className="mx-auto max-w-7xl px-5 sm:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* monogram */}
					<a href="#inicio" className="group flex items-center gap-2.5">
						<span className="grid h-9 w-9 place-items-center rounded-md border border-lime/40 bg-lime/10 font-mono text-sm font-bold text-lime">
							GL
						</span>
						<span className="font-mono text-xs uppercase tracking-[0.18em] text-dim transition-colors group-hover:text-ink">
							guilherme<span className="text-lime">.</span>studio
						</span>
					</a>

					{/* desktop nav */}
					<nav className="hidden items-center gap-0.5 md:flex">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								className="group relative rounded-md px-3 py-2 text-sm text-dim transition-colors hover:text-ink"
							>
								<span className="mr-1.5 font-mono text-[10px] text-faint transition-colors group-hover:text-lime">
									{l.n}
								</span>
								{l.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-2.5">
						<a
							href={LINKEDIN}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden rounded-full border border-line px-4 py-2 text-sm text-dim transition-colors hover:border-lime/40 hover:text-ink sm:inline-flex"
						>
							Perfil
						</a>
						<a
							href={WHATSAPP}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-lime-2"
						>
							Vamos conversar
							<IconArrowUpRight
								size={16}
								className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</a>
						<button
							onClick={() => setOpen((v) => !v)}
							className="grid h-9 w-9 place-items-center rounded-md border border-line text-ink md:hidden"
							aria-label="Abrir menu"
						>
							{open ? <IconX size={18} /> : <IconMenu2 size={18} />}
						</button>
					</div>
				</div>
			</div>

			{/* mobile menu */}
			{open && (
				<div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
					<nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								onClick={() => setOpen(false)}
								className="flex items-center gap-3 border-b border-line/60 py-3 text-dim last:border-0 hover:text-ink"
							>
								<span className="font-mono text-[10px] text-faint">{l.n}</span>
								{l.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	)
}
