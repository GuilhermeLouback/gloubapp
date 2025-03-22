/* eslint-disable @typescript-eslint/no-unused-vars */
import Cabecalho from "@/components/shared/Cabecalho"
import { obterProjeto } from "@/functions/projetos"
import Container from "@/components/shared/Container"
import CarrosselImagens from "@/components/shared/CarroselImagens"
import Tecnologias from "@/components/tecnologias/tecnologias"
import { obterReadme } from "@/functions/github"
import ConteudoMD from "@/components/shared/ConteudoMD"
import Readme from "@/components/projetos/Readme"

export default async function PaginaProjeto(props: { params: { id: string } }) {
    const { id } = await props.params
    const projeto = await obterProjeto(id)

    if(!projeto) return null
    const readme = await obterReadme(projeto.repositorio)

    return (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
                <CarrosselImagens imagens={projeto.imagens.slice(1)} />
                <Tecnologias lista={projeto.tecnologias} tamanhoMenor />
                <Readme markdown={readme} />
            </Container>
        </div>
    )
}
