import Mensagem from "@/model/Mensagem"
import ConteudoMD from "../shared/ConteudoMD"
import { IconMessage2 } from "@tabler/icons-react"

export interface BalaoMensagemProps {
	mensagem: Mensagem
	omitirAutor?: boolean
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
	return props.mensagem.lado === "esquerdo" ? (
		<BalaoEsquerdo {...props} />
	) : (
		<BalaoDireito {...props} />
	)
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
	return (
		<div className="flex gap-2.5">
			{!props.omitirAutor ? (
				<span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime text-bg">
					<IconMessage2 size={16} />
				</span>
			) : (
				<span className="w-8 shrink-0" />
			)}
			<div className="flex max-w-[80%] flex-col gap-1">
				{!props.omitirAutor && (
					<span className="text-[11px] text-faint">{props.mensagem.autor}</span>
				)}
				<div className="break-words rounded-2xl rounded-tl-sm border border-line bg-panel-2 px-4 py-2.5 text-sm text-ink [&_a]:text-lime [&_a]:underline">
					<ConteudoMD markdown={props.mensagem.texto} />
				</div>
			</div>
		</div>
	)
}

function BalaoDireito(props: BalaoMensagemProps) {
	return (
		<div className="flex flex-col items-end gap-1">
			{!props.omitirAutor && (
				<span className="pr-1 text-[11px] text-faint">{props.mensagem.autor}</span>
			)}
			<div className="max-w-[80%] break-words rounded-2xl rounded-br-sm bg-lime px-4 py-2.5 text-sm font-medium text-bg [&_a]:text-bg [&_a]:underline">
				<ConteudoMD markdown={props.mensagem.texto} />
			</div>
		</div>
	)
}
