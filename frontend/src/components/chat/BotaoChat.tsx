"use client"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import JanelaChat from "./JanelaChat"
import { IconMessage2 } from "@tabler/icons-react"

export default function BotaoChat() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					aria-label="Abrir chat"
					className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-lime text-bg shadow-lg shadow-lime/20 transition-transform hover:scale-105"
				>
					<IconMessage2 size={24} />
					<span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-bg bg-emerald-400" />
				</button>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={12}
				className="w-[360px] border-0 bg-transparent p-0 shadow-none sm:w-[420px]"
			>
				<JanelaChat />
			</PopoverContent>
		</Popover>
	)
}
