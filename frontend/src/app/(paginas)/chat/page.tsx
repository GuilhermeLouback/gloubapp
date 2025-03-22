/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import useChat from "@/hooks/useChat"
import { useState } from "react"

export default function Chat() {
    const { chatId, mensagens, adicionarMensagem, limparMensagens } = useChat()
    const [texto, setTexto] = useState("")
    return (
        <div>
            <h1>Chat</h1>
            <h2>Chat ID{chatId}</h2>
            <button onClick={limparMensagens}>Limpar</button>

            <ul>
                {mensagens.map((mensagem) => (
                    <li key={mensagem.id} className="flex gap-2">
                        <div>{mensagem.autor}</div>
                        <div>{mensagem.texto}</div>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={texto}
                className="border border-amber-200"
                onChange={(e: any) => {
                    setTexto(e.target.value)
                }}
                onKeyDown={(e: any) => {
                    if(e.key === "Enter"){
                        adicionarMensagem(texto)
                        setTexto("")
                    }
                }}
            />
        </div>
    )
}
