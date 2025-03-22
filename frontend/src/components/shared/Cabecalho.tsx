/*import Image from "next/image"*/
import Link from "next/link"
import Container from "./Container"
import Menu from "./Menu"

export default function Cabecalho() {
    return (
        <header className="w-full bg-gray-800 flex items-center h-16">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        {/*<Image src="/logo.svg" alt="Logo" width={80} height={0} />*/}
                    </Link>
                    <Menu></Menu>
                </div>
                <div className="hidden sm:flex items-center">
                    <Link
                        href="https://www.linkedin.com/in/guilherme-louback-45b530218/"
                        target="_blank"
                        className="bg-red-500 rounded-full px-7 text-sm font-bold"
                    >
                        Perfil
                    </Link>
                </div>
            </Container>
        </header>
    )
}
