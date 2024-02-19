import { ReactNode } from 'react';

export default function NewTabButton ({ href, className = '', children }: { href: string, className?: string, children?: ReactNode}) {
	return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex gap-1 items-center ${className}`}>
      {children}
    </a>
	);
}
