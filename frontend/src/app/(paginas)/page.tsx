import Nav from "@/components/studio/Nav"
import Hero from "@/components/studio/Hero"
import BuildSimulation from "@/components/studio/BuildSimulation"
import Services from "@/components/studio/Services"
import About from "@/components/studio/About"
import Stack from "@/components/studio/Stack"
import Contact from "@/components/studio/Contact"
import Footer from "@/components/studio/Footer"

export default function Home() {
	return (
		<>
			<div className="grain" aria-hidden />
			<Nav />
			<main>
				<Hero />
				<BuildSimulation />
				<Services />
				<About />
				<Stack />
				<Contact />
			</main>
			<Footer />
		</>
	)
}
