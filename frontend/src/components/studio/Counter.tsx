"use client"
import { useEffect, useRef, useState } from "react"

interface CounterProps {
	value: number
	prefix?: string
	suffix?: string
	duration?: number
}

// Conta de 0 até `value` quando entra na viewport.
export default function Counter({ value, prefix = "", suffix = "", duration = 1400 }: CounterProps) {
	const [n, setN] = useState(0)
	const ref = useRef<HTMLSpanElement>(null)
	const started = useRef(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const io = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || started.current) return
				started.current = true
				io.disconnect()

				const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
				if (reduce) {
					setN(value)
					return
				}
				const start = performance.now()
				const tick = (now: number) => {
					const t = Math.min(1, (now - start) / duration)
					const eased = 1 - Math.pow(1 - t, 3)
					setN(Math.round(eased * value))
					if (t < 1) requestAnimationFrame(tick)
				}
				requestAnimationFrame(tick)
			},
			{ threshold: 0.5 }
		)
		io.observe(el)
		return () => io.disconnect()
	}, [value, duration])

	return (
		<span ref={ref}>
			{prefix}
			{n}
			{suffix}
		</span>
	)
}
