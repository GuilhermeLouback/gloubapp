"use server"
import Mensagem from "@/model/Mensagem"

export default async function conversar(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK

	// Modo somente-frontend: sem webhook configurado, devolve uma resposta local
	// de exemplo para a UI do chat funcionar offline. Configure CHAT_WEBHOOK
	// (ou remova este bloco) para usar o assistente real.
	if (!webhookUrl) {
		return `Olá! Esta é uma resposta de exemplo (modo local). Você disse: "${mensagem.texto}".`
	}

	const resposta = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			mensagem: mensagem.texto,
		}),
	})

	const msg = await resposta.json()
	return msg.resposta
}
