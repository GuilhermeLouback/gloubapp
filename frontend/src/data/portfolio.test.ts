import { existsSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { grupos, servicos, tecnologiaPorId, tecnologias } from "./portfolio"

const PUBLIC_DIR = join(process.cwd(), "public")

describe("portfolio", () => {
	it("tem ids de tecnologia únicos", () => {
		const ids = tecnologias.map((t) => t.id)
		expect(new Set(ids).size).toBe(ids.length)
	})

	it("serve todos os ícones localmente de public/", () => {
		for (const t of tecnologias) {
			expect(t.imagem, t.nome).toMatch(/^\/tech\/[a-z]+\.svg$/)
			expect(existsSync(join(PUBLIC_DIR, t.imagem)), t.imagem).toBe(true)
		}
	})

	it("só referencia tecnologias existentes em serviços e grupos", () => {
		const refs = [...servicos.flatMap((s) => s.tec), ...grupos.flatMap((g) => g.ids)]
		for (const id of refs) expect(tecnologiaPorId(id), `id ${id}`).toBeDefined()
	})

	it("tem destaques para o marquee do hero", () => {
		expect(tecnologias.some((t) => t.destaque)).toBe(true)
	})
})
