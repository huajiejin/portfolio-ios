import { ReactNode } from 'react';

export default function NewTabButton ({ href, className = '', children }: { href: string, className?: string, children?: ReactNode}) {
	return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex gap-1 items-center px-2 py-1 text-sm border rounded ${className}`}>
      {children}
    </a>
	);
}
