import { ReactNode } from 'react'

export default function Project({ text, className, children }: { text: string, className?: string, children?: ReactNode}) {
	return (
		<div className={`inline-flex gap-1 items-center px-1 py-[2px] text-sm border rounded ${className}`}>
			{children}
    		<span>{text}</span>
		</div>
	)
}