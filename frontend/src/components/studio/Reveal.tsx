"use client"
import { useEffect, useRef, useState } from "react"

interface RevealProps {
	children: React.ReactNode
	delay?: number
	className?: string
}

// Anima a entrada do conteúdo quando ele aparece na viewport (IntersectionObserver).
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [seen, setSeen] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setSeen(true)
					io.disconnect()
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
		)
		io.observe(el)
		return () => io.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			className={`reveal ${seen ? "is-in" : ""} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	)
}
