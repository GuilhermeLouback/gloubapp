/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface Mensagem {
    id: string
    texto : string
    autor : string 
    lado : "esquerdo"| "direito"
    icone: any
}