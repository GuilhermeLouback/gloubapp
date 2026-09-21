import type { Metadata } from "next"
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import { SITE_URL } from "@/data/contato"
import "./globals.css"

const display = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--font-bricolage",
	display: "swap",
	weight: ["400", "500", "600", "700", "800"],
})

const sans = Hanken_Grotesk({
	subsets: ["latin"],
	variable: "--font-hanken",
	display: "swap",
})

const mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
	display: "swap",
})

const title = "Guilherme Louback — Desenvolvedor · Crio sites e aplicativos"
const description =
	"Desenvolvedor full-stack. Transformo ideias em sites e aplicativos sob medida — do código ao produto."

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title,
	description,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "/",
		siteName: "Guilherme Louback",
		title,
		description,
	},
	twitter: { card: "summary_large_image", title, description },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
			<body className="antialiased">{children}</body>
		</html>
	)
}
