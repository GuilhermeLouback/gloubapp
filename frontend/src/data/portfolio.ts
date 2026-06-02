// =============================================================================
// Dados locais — modo SOMENTE FRONTEND (site de apresentação)
// -----------------------------------------------------------------------------
//   • tecnologias: stack/skills (logos genéricos).
//   • servicos:    o que o Guilherme faz (substitui a antiga lista de projetos).
//   • grupos:      stack agrupada por área, para a seção de tecnologias.
// =============================================================================
export interface Tecnologia {
	id: number
	nome: string
	descricao: string
	imagem: string
	destaque: boolean
}

const ASSETS = "https://github.com/portfolio-projetos-dev/assets/raw/main/images"

export const tecnologias: Tecnologia[] = [
	{ id: 1, nome: "HTML", destaque: false, descricao: "Linguagem de marcação para estruturação de páginas web.", imagem: `${ASSETS}/html.svg` },
	{ id: 2, nome: "CSS", destaque: false, descricao: "Linguagem de estilos para definição do design e layout das páginas web.", imagem: `${ASSETS}/css.svg` },
	{ id: 3, nome: "JavaScript", destaque: false, descricao: "Linguagem de programação para interatividade em páginas web.", imagem: `${ASSETS}/javascript.svg` },
	{ id: 4, nome: "TypeScript", destaque: true, descricao: "Superset do JavaScript que adiciona tipagem estática.", imagem: `${ASSETS}/typescript.svg` },
	{ id: 5, nome: "Node.js", destaque: true, descricao: "Ambiente de execução JavaScript no lado do servidor.", imagem: `${ASSETS}/node.svg` },
	{ id: 6, nome: "Java", destaque: true, descricao: "Linguagem de programação orientada a objetos.", imagem: `${ASSETS}/java.svg` },
	{ id: 7, nome: "Python", destaque: true, descricao: "Linguagem de programação interpretada de alto nível.", imagem: `${ASSETS}/python.svg` },
	{ id: 8, nome: "NestJS", destaque: true, descricao: "Framework para construção de aplicações back-end em Node.js.", imagem: `${ASSETS}/nest.svg` },
	{ id: 9, nome: "Express.js", destaque: false, descricao: "Framework web minimalista para Node.js.", imagem: `${ASSETS}/express.svg` },
	{ id: 10, nome: "React", destaque: true, descricao: "Biblioteca JavaScript para construção de interfaces de usuário.", imagem: `${ASSETS}/react.svg` },
	{ id: 11, nome: "Vue.js", destaque: false, descricao: "Framework progressivo para construção de interfaces de usuário.", imagem: `${ASSETS}/vue.svg` },
	{ id: 12, nome: "Angular", destaque: false, descricao: "Framework front-end desenvolvido pelo Google.", imagem: `${ASSETS}/angular.svg` },
	{ id: 13, nome: "Svelte", destaque: false, descricao: "Framework para construção de interfaces reativas.", imagem: `${ASSETS}/svelte.svg` },
	{ id: 14, nome: "PostgreSQL", destaque: false, descricao: "Sistema de gerenciamento de banco de dados relacional avançado.", imagem: `${ASSETS}/postgresql.svg` },
	{ id: 15, nome: "MongoDB", destaque: false, descricao: "Banco de dados NoSQL orientado a documentos.", imagem: `${ASSETS}/mongo.svg` },
	{ id: 16, nome: "GraphQL", destaque: false, descricao: "Linguagem de consulta para APIs que permite obter apenas os dados necessários.", imagem: `${ASSETS}/graphql.svg` },
	{ id: 17, nome: "Docker", destaque: false, descricao: "Plataforma para criação, execução e gerenciamento de containers.", imagem: `${ASSETS}/docker.svg` },
	{ id: 18, nome: "Kubernetes", destaque: false, descricao: "Sistema para automação da implantação, escalonamento e operações de containers.", imagem: `${ASSETS}/kubernetes.svg` },
	{ id: 19, nome: "Terraform", destaque: false, descricao: "Ferramenta de infraestrutura como código para gerenciamento de recursos na nuvem.", imagem: `${ASSETS}/terraform.svg` },
	{ id: 20, nome: "Firebase", destaque: false, descricao: "Plataforma de desenvolvimento de aplicativos móveis e web da Google.", imagem: `${ASSETS}/firebase.svg` },
	{ id: 21, nome: "React Native", destaque: false, descricao: "Biblioteca para desenvolvimento de aplicativos móveis com React.", imagem: `${ASSETS}/react.svg` },
	{ id: 22, nome: "Next.js", destaque: false, descricao: "Framework React para construção de aplicações web.", imagem: `${ASSETS}/next.svg` },
	{ id: 23, nome: "Prisma", destaque: false, descricao: "ORM para Node.js e TypeScript com suporte a diversos bancos de dados.", imagem: `${ASSETS}/prisma.svg` },
	{ id: 24, nome: "Supabase", destaque: false, descricao: "Plataforma open-source para desenvolvimento de aplicativos web e APIs.", imagem: "https://cdn.simpleicons.org/supabase/3FCF8E" },
	{ id: 25, nome: "Tailwind CSS", destaque: false, descricao: "Framework CSS para construção de interfaces de usuário.", imagem: `${ASSETS}/tailwind.svg` },
	{ id: 26, nome: "Flutter", destaque: true, descricao: "Framework para desenvolvimento de aplicativos móveis nativos.", imagem: `${ASSETS}/flutter.svg` },
	{ id: 27, nome: "PHP", destaque: true, descricao: "Linguagem de programação de uso geral.", imagem: `${ASSETS}/php.svg` },
	{ id: 28, nome: "ChatGPT", destaque: false, descricao: "Integração de IA conversacional baseada em GPT.", imagem: `${ASSETS}/openai.svg` },
	{ id: 29, nome: "Dart", destaque: false, descricao: "Linguagem de programação para desenvolvimento de aplicativos móveis com Flutter.", imagem: `${ASSETS}/dart.svg` },
	{ id: 30, nome: "Laravel", destaque: true, descricao: "Framework PHP para desenvolvimento web elegante e produtivo.", imagem: "https://cdn.simpleicons.org/laravel/FF2D20" },
	{ id: 31, nome: "CodeIgniter", destaque: true, descricao: "Framework PHP leve e rápido para construção de aplicações web.", imagem: "https://cdn.simpleicons.org/codeigniter/EF4223" },
	{ id: 32, nome: "MySQL", destaque: false, descricao: "Sistema de gerenciamento de banco de dados relacional open-source.", imagem: "https://cdn.simpleicons.org/mysql/4479A1" },
	{ id: 33, nome: "jQuery", destaque: false, descricao: "Biblioteca JavaScript para manipulação de DOM e interações.", imagem: "https://cdn.simpleicons.org/jquery/0769AD" },
	{ id: 34, nome: "Bootstrap", destaque: false, descricao: "Framework CSS para construção rápida de interfaces responsivas.", imagem: "https://cdn.simpleicons.org/bootstrap/7952B3" },
	{ id: 35, nome: "WordPress", destaque: true, descricao: "CMS em PHP para criação de sites e blogs.", imagem: "https://cdn.simpleicons.org/wordpress/21759B" },
	{ id: 36, nome: "Symfony", destaque: true, descricao: "Framework PHP robusto para aplicações web de grande porte.", imagem: "https://cdn.simpleicons.org/symfony/FFFFFF" },
	{ id: 37, nome: "SASS", destaque: false, descricao: "Pré-processador CSS com variáveis, aninhamento e mixins.", imagem: "https://cdn.simpleicons.org/sass/CC6699" },
	{ id: 38, nome: "Redis", destaque: false, descricao: "Banco de dados em memória usado para cache e filas.", imagem: "https://cdn.simpleicons.org/redis/FF4438" },
]

export const tecnologiaPorId = (id: number): Tecnologia | undefined =>
	tecnologias.find((t) => t.id === id)

export const tecsPorIds = (ids: number[]): Tecnologia[] =>
	ids.map(tecnologiaPorId).filter((t): t is Tecnologia => Boolean(t))

// O que eu faço — substitui a antiga lista de projetos.
export interface Servico {
	id: string
	num: string
	titulo: string
	descricao: string
	itens: string[]
	tec: number[]
}

export const servicos: Servico[] = [
	{
		id: "sites",
		num: "01",
		titulo: "Criação de Sites",
		descricao:
			"Landing pages, sites institucionais e sistemas web rápidos, responsivos e otimizados — do design ao deploy.",
		itens: ["Next.js & React", "SEO & performance", "100% responsivo", "Deploy & domínio"],
		tec: [1, 2, 4, 10, 22, 25],
	},
	{
		id: "apps",
		num: "02",
		titulo: "Criação de Aplicativos",
		descricao:
			"Aplicativos mobile para Android e iOS com experiência fluida e nativa, prontos para as lojas.",
		itens: ["React Native & Flutter", "iOS & Android", "Offline-first", "Publicação nas lojas"],
		tec: [21, 26, 29, 4, 20],
	},
	{
		id: "apis",
		num: "03",
		titulo: "APIs & Integrações",
		descricao:
			"Back-ends robustos, APIs REST/GraphQL e integrações entre plataformas para conectar tudo.",
		itens: ["NestJS & Node.js", "REST & GraphQL", "SQL & NoSQL", "Integrações"],
		tec: [5, 8, 9, 16, 14, 15],
	},
	{
		id: "infra",
		num: "04",
		titulo: "Infra & DevOps",
		descricao:
			"Containers, automação e infraestrutura como código para deploys confiáveis na nuvem ou on-premise.",
		itens: ["Docker & Kubernetes", "CI/CD", "Terraform", "Cloud & on-premise"],
		tec: [17, 18, 19],
	},
]

export interface GrupoStack {
	titulo: string
	ids: number[]
}

export const grupos: GrupoStack[] = [
	{ titulo: "Front-end", ids: [1, 2, 37, 3, 33, 4, 10, 11, 12, 13, 22, 25, 34] },
	{ titulo: "Back-end", ids: [5, 6, 7, 8, 9, 16, 27, 30, 31, 36, 35, 28] },
	{ titulo: "Mobile", ids: [21, 26, 29] },
	{ titulo: "Dados & Infra", ids: [14, 32, 15, 38, 23, 24, 20, 17, 18, 19] },
]
