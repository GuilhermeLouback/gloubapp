export default function Experiencia() {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-cente justify-around gap-6 p-6 bg-gray-800 border border-red-500 rounded-2xl">
            <Item principal="+5" label="Anos de experiênca" />
            <Item principal="+20" label="Projetos" />
            <Item principal="+420h" label="Horas de desenvolvimento" />
        </div>
    )
}

function Item(props: { principal: string; label: string }) {
    return <div className="flex flex-col items-center ">
        <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
        <span className="text-sm text-center">{props.label}</span>
    </div>
}
