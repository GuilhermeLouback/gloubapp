import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
    markdown : string
}


export default function Readme(props: ReadmeProps){
    return(
        <div className="flex flex-col items-stretch p-6 bg  bg-gray-800 border border-red-500 rounded-2xl">
            <div className=" ">
                <ConteudoMD markdown={props.markdown}/>
            </div>
        </div>
    )
}