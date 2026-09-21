import { ImageResponse } from "next/og"

// Prévia do link ao compartilhar (WhatsApp, LinkedIn, etc.). Gerada no build.
export const alt = "Guilherme Louback — Transformo ideias em sites e aplicativos"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: 80,
				background: "#0a0b0e",
				backgroundImage:
					"radial-gradient(circle at 15% 0%, rgba(194,242,60,0.18), transparent 55%)",
				color: "#eef1f4",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: 20 }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: 72,
						height: 72,
						borderRadius: 12,
						border: "2px solid rgba(194,242,60,0.4)",
						background: "rgba(194,242,60,0.1)",
						color: "#c2f23c",
						fontSize: 30,
						fontWeight: 700,
					}}
				>
					GL
				</div>
				<div style={{ fontSize: 28, color: "#99a1ad", letterSpacing: 4 }}>
					GUILHERME LOUBACK
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					fontSize: 76,
					fontWeight: 800,
					lineHeight: 1.05,
				}}
			>
				<div style={{ display: "flex" }}>Transformo ideias</div>
				<div style={{ display: "flex" }}>
					em&nbsp;<span style={{ color: "#c2f23c" }}>sites</span>&nbsp;e&nbsp;
					<span style={{ color: "#c2f23c" }}>aplicativos</span>.
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					fontSize: 26,
					color: "#99a1ad",
				}}
			>
				<div style={{ display: "flex" }}>Desenvolvedor full-stack · Web & Mobile</div>
				<div style={{ display: "flex", color: "#c2f23c" }}>gloubapp.com</div>
			</div>
		</div>,
		size,
	)
}
