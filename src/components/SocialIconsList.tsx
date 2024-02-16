import Image from 'next/image';
import { CalendarIcon, ArrowTopRightOnSquareIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

// Social logos
const socialLogos: { [key: string]: string } = {
  github: "/socials/github.svg",
  linkedin: "/socials/linkedin.svg",
  x: "/socials/x.svg",
}

const SocialIcon = ({ name, href }: { name: string, href: string }) => (
  <a href={href} title={`${name}`} target="_blank" rel="noopener noreferrer">
	{
    socialLogos[name] ? (
      <Image
        src={socialLogos[name]}
        alt={`${name} logo`}
        width={20}
        height={20}
        />
    ) : ( name )
	}
  </a>
);

const SocialIconsList = ({ socials, className }: { socials: [string, string][], className?: string }) => (
  <div className={`${className}`}>
    {socials.map(([name, href]) => (
      <SocialIcon key={name} name={name} href={href} />
    ))}
  </div>
);

export { SocialIcon, SocialIconsList };
