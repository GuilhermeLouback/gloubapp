import {
	IconArrowUpRight,
	IconBrandWhatsapp,
	IconBrandLinkedin,
	IconBrandGithub,
	IconMail,
} from "@tabler/icons-react"
import SectionLabel from "./SectionLabel"
import Reveal from "./Reveal"

const WHATSAPP = "https://wa.me/5532998359433"
const LINKEDIN = "https://www.linkedin.com/in/guilherme-louback-45b530218/"
const GITHUB = "https://github.com/GuilhermeLouback"
const EMAIL = "mailto:guiloubackvirgilio@gmail.com"

type Ic = React.ComponentType<{ size?: number; className?: string }>

const socials: { href: string; label: string; icon: Ic }[] = [
	{ href: WHATSAPP, label: "WhatsApp", icon: IconBrandWhatsapp },
	{ href: LINKEDIN, label: "LinkedIn", icon: IconBrandLinkedin },
	{ href: GITHUB, label: "GitHub", icon: IconBrandGithub },
	{ href: EMAIL, label: "E-mail", icon: IconMail },
]

export default function Contact() {
	return (
		<section id="contato" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
			<div className="bp-grid mask-fade-b absolute inset-0 opacity-50" />
			<div
				className="glow"
				style={{
					width: 640,
					height: 420,
					bottom: -160,
					left: "50%",
					transform: "translateX(-50%)",
					background: "rgba(194,242,60,0.14)",
				}}
			/>

			<div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
				<Reveal>
					<div className="flex justify-center">
						<SectionLabel n="06" text="Contato" />
					</div>
					<h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
						Vamos construir <span className="text-lime">algo juntos?</span>
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-base text-dim sm:text-lg">
						Tem uma ideia de site ou aplicativo? Me chama — a gente conversa e eu
						transformo em um produto no ar.
					</p>

					<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
						<a
							href={WHATSAPP}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-lime-2"
						>
							<IconBrandWhatsapp size={18} />
							Conversar no WhatsApp
							<IconArrowUpRight
								size={16}
								className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</a>
						<a
							href={EMAIL}
							className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-lime/40"
						>
							<IconMail size={18} className="text-lime" />
							Enviar um e-mail
						</a>
					</div>

					<div className="mt-10 flex items-center justify-center gap-3">
						{socials.map(({ href, label, icon: Icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								className="grid h-11 w-11 place-items-center rounded-full border border-line bg-panel text-dim transition-colors hover:border-lime/40 hover:text-lime"
							>
								<Icon size={19} />
							</a>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	)
}
