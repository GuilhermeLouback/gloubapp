import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
    markdown : string
}

export default function Readme(props: ReadmeProps){
    return(
        <div className="flex flex-col items-stretch p-6 bg-gray-800 border border-red-500 rounded-2xl w-full max-w-screen-md mx-auto">
            <div className="prose prose-zinc prose-invert w-full" style={{ maxWidth: "100%" }}>
                <ConteudoMD markdown={props.markdown}/>
            </div>
        </div>
    )
}