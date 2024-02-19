import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaDiscord, FaStackOverflow } from "react-icons/fa6";
import { IconBaseProps } from 'react-icons/lib';

// Social logos
const socialLogos: { [key: string]: React.FC<IconBaseProps> } = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  ins: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebook,
  youtube: FaYoutube,
  discord: FaDiscord,
  stackoverflow: FaStackOverflow,
}

const SocialIcon = ({ name, href }: { name: string, href: string }) => {
  const SocialLogo = socialLogos[name]
  return (
    <a href={href} title={`${name}`} target="_blank" rel="noopener noreferrer">
    {
      SocialLogo ? (
        <SocialLogo className="w-5 h-5" />
      ) : ( name )
    }
    </a>
  )
};

const SocialIconsList = ({ socials, className }: { socials: [string, string][], className?: string }) => (
  <div className={`${className}`}>
    {socials.map(([name, href]) => (
      <SocialIcon key={name} name={name} href={href} />
    ))}
  </div>
);

export { SocialIcon, SocialIconsList };
