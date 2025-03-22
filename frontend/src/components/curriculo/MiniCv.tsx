/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start  bg-gray-800 border border-red-500 rounded-2xl px-6 pt-6">
            <div className="relative min-w-60 h-64 xl:self-start">
                <Image src={"/minha-foto.jpg"} alt="Foto do Perfil" fill className="rounded-full object-cover" />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="
                    bg-gradient-to-r from-red-500 via-white to white
                    text-transparent bg-clip-text text-2xl font-bold
                    ">Guilherme Louback</span>
                    <span>
                        {" "}
                        Desenvolvedor na{" "}
                        <a
                            className=" border-red-500 hover:text-white border-b-1"
                            href="https://dimensa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dimensa Tecnologia
                        </a>
                    </span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    Sou um desenvolvedor formado como analista e desenvolvedor de sistemas
                    comprometido em participar ativamente da criação e aprimoramento de projetos.
                    Tenho a responsabilidade de conduzir pesquisas e implementar novas
                    funcionalidades utilizando uma ampla gama de linguagens de programação. Além
                    disso, sou habilidoso em infraestrutura, dominando ferramentas DevOps essenciais
                    que contribuem para a eficiência na gestão empresarial e no controle de
                    servidores, tanto na nuvem como físicos. Tenho uma atuação direta na integração
                    entre plataformas, utilizando APIs para aproveitar ao máximo as funcionalidades
                    e recursos oferecidos por diversas plataformas. Estou sempre aberto a enfrentar
                    novos desafios e dedico-me constantemente a estudar e compreender as tendências
                    tecnológicas mais recentes. Meu objetivo é me tornar um profissional de
                    excelência, oferecendo soluções inovadoras e de alta qualidade.
                </p>
            </div>
        </div>
    )
}
