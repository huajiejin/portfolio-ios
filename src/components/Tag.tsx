import { ReactNode } from 'react'

export default function Tag({ text, className, children }: { text: string, className?: string, children?: ReactNode}) {
	return (
		<div className={`text-secondary inline-flex gap-1 items-center text-sm ${className}`}>
			{children}
    	<span>{text}</span>
		</div>
	)
}