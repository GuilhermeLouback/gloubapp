export default function SectionLabel({ n, text }: { n: string; text: string }) {
	return (
		<div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
			<span className="text-lime">{n}</span>
			<span className="h-px w-8 bg-line-2" />
			<span>{text}</span>
		</div>
	)
}
