import Image from 'next/image';
import config, { socials } from '../../dev-portfolio-pro.config';

// Socials logos
const socialsLogos: { [key: string]: string } = {
  github: "/socials/github.svg",
  linkedin: "/socials/linkedin.svg",
  x: "/socials/x.svg",
}


// Valid social links
const validSocialLinks = Object.entries(config.socials)
  .filter(([_, value]) => !!value)

export default function Home() {
  return (
    <div>
      <header className="flex justify-end items-center fixed z-10 w-full h-16 p-6 bg-white dark:bg-gray-800">
        <div className="flex gap-2 font-medium">
          <a href="#projects">Projects</a>
          <a href={`mailto:${config.email}?subject=Hi,${config.name}&body=I would like to connect`}>Contact</a>
        </div>
      </header>
      <main className="px-8">
        <div className="flex justify-center items-center gap-24 min-h-screen">
          <div className="max-w-lg">
            <div className="text-5xl font-semibold leading-relaxed">Hi, I'm {config.name},</div>
            <div className="text-5xl font-semibold">{config.role}</div>
            <div className="mt-8">{config.bio}</div>
            <div className="mt-4 flex gap-6">
            {
              validSocialLinks.length > 0 && (
                  <div className="flex gap-3">
                  {
                    validSocialLinks
                      .map(([key, value]) => {
                        return (
                          <a
                            key={key}
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {/* if the socialsLogos object has the key, render the image */}
                            {socialsLogos[key] ? (
                              <Image
                                src={socialsLogos[key]}
                                alt={key}
                                width={20}
                                height={20}
                              />
                            ) : (
                              // otherwise, render the key
                              key
                            )}
                          </a>
                        );
                      })
                  }
                </div>
              )
            }
            {
              // show download resume button if the resume link is provided
              config.resume_url && (
                <a
                  href={config.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-500 underline"
                >
                  Download Resume
                </a>
              )
            }
            </div>
          </div>
          <div className="w-60 h-60 overflow-hidden rounded-full shadow-xl">
              <Image
                src={config.avatar_url}
                alt={`Avatar of ${config.name}`}
                className="w-full h-full object-cover object-center"
                width={300}
                height={300}
                priority
              />
          </div>
        </div>
        <div id="projects"></div>
      </main>
    </div>
  );
}
