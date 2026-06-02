"use client"
import { useEffect, useRef, useState } from "react"
import { IconMessage2, IconReload, IconSend } from "@tabler/icons-react"
import useChat from "@/hooks/useChat"
import BalaoMensagem from "./BalaoMensagem"

export default function JanelaChat() {
	const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
	const [texto, setTexto] = useState("")
	const fimChatRef = useRef<HTMLDivElement>(null)

	function enviarMensagem() {
		if (!texto.trim()) return
		adicionarMensagem(texto)
		setTexto("")
	}

	useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [mensagens])

	return (
		<div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel text-ink shadow-2xl">
			{/* header */}
			<div className="flex items-center justify-between border-b border-line bg-panel-2/60 px-4 py-3">
				<div className="flex items-center gap-2.5">
					<span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-bg">
						<IconMessage2 size={18} />
					</span>
					<div className="leading-tight">
						<div className="text-sm font-semibold">Assistente</div>
						<div className="flex items-center gap-1.5 font-mono text-[10px] text-faint">
							<span className="dot-live h-1.5 w-1.5 rounded-full bg-lime" /> online
						</div>
					</div>
				</div>
				<button
					onClick={limparMensagens}
					className="text-faint transition-colors hover:text-ink"
					aria-label="Limpar conversa"
				>
					<IconReload size={18} />
				</button>
			</div>

			{/* body */}
			{mensagens.length === 0 ? (
				<div className="flex min-h-[360px] flex-col items-center justify-center gap-3 px-8 text-center">
					<span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-panel-2 text-lime">
						<IconMessage2 size={26} />
					</span>
					<p className="text-sm text-dim">
						Olá! Pergunte sobre o Guilherme, seus serviços ou sua stack.
					</p>
				</div>
			) : (
				<div className="flex max-h-[420px] min-h-[360px] flex-col gap-3 overflow-y-auto p-3">
					{mensagens.map((m, i) => {
						const mesmoAutor = i > 0 && mensagens[i - 1].autor === m.autor
						return <BalaoMensagem key={m.id} mensagem={m} omitirAutor={mesmoAutor} />
					})}
					{pensando && (
						<div className="flex items-center gap-1 pl-2">
							<Dot />
							<Dot d={150} />
							<Dot d={300} />
						</div>
					)}
					<div ref={fimChatRef} />
				</div>
			)}

			{/* input */}
			<div className="border-t border-line p-3">
				<div className="flex items-center gap-2 rounded-full border border-line bg-bg px-2 py-1">
					<input
						type="text"
						value={texto}
						placeholder="Escreva uma mensagem…"
						className="h-9 flex-1 bg-transparent px-2 text-sm text-ink outline-none placeholder:text-faint"
						onChange={(e) => setTexto(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") enviarMensagem()
						}}
					/>
					<button
						onClick={enviarMensagem}
						aria-label="Enviar"
						className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-bg transition-colors hover:bg-lime-2"
					>
						<IconSend size={17} />
					</button>
				</div>
			</div>
		</div>
	)
}

function Dot({ d = 0 }: { d?: number }) {
	return (
		<span
			className="h-2 w-2 animate-bounce rounded-full bg-lime"
			style={{ animationDelay: `${d}ms` }}
		/>
	)
}
