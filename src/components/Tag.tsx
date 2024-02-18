import { ReactNode } from 'react'

export default function Tag({ text, className, children }: { text: string, className?: string, children?: ReactNode}) {
	return (
		<div className={`inline-flex gap-1 items-center text-sm text-stone-600 ${className}`}>
			{children}
    	<span>{text}</span>
		</div>
	)
}