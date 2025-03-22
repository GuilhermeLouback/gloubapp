import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"
import { Carousel } from "../ui/carousel"
import { CarouselContent } from "../ui/carousel"
import { CarouselItem } from "../ui/carousel"
import { CarouselPrevious } from "../ui/carousel"
import { CarouselNext } from "../ui/carousel"

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
}

export default function Projetos(props: ProjetosProps) {
    return (
        <div className="flex flex-col items-center sm:items-start w-full max-w-screen-lg mx-auto gap-5 p-4">
            <h3 className="text-2xl font-bold text-white/70 text-center sm:text-left">{props.titulo}</h3>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="flex">
                    {props.lista.map((projeto) => (
                        <CarouselItem key={projeto.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <ItemProjeto projeto={projeto} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
