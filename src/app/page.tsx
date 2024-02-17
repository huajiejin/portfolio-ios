import Image from 'next/image';
import config from '../../dev-portfolio-pro.config';
import Project from '@/components/Project';
import { SocialIconsList } from '@/components/SocialIconsList';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

// Valid social links
const validSocialLinks = Object.entries(config.socials || {})
  .filter(([_, value]) => !!value)

export default function Home() {
  return (
    <div>
      <header className="flex justify-end items-center fixed z-10 w-full h-16 p-6 bg-white dark:bg-gray-800">
        <div className="flex gap-8 text-sm font-medium">
          {
            config.projects?.length > 0 && (
              <a href="#projects">Projects</a>
            )
          }
          <a href={`mailto:${config.email}?subject=Hi,${config.name}&body=I would like to connect`}>Contact</a>
        </div>
      </header>
      <main className="bg-stone-50 dark:bg-stone-950">
        <div className="relative bg-white dark:bg-stone-900">
          <ChevronDoubleDownIcon className="w-4 h-4 absolute bottom-4 left-1/2 -translate-x-1/2" />
          <div className="flex justify-center items-center -translate-y-8 md:gap-24 flex-wrap-reverse min-h-[95vh] px-8 py-16 mx-auto snap-start">
            <div className="max-w-md">
              <div className="text-4xl font-semibold leading-relaxed">Hi, I&apos;m {config.name},</div>
              <div className="text-4xl font-semibold">{config.role}</div>
              <div className="mt-4 whitespace-pre-wrap">{config.bio}</div>
              <div className="mt-4 flex gap-6">
                {
                  validSocialLinks.length > 0 && (
                    <SocialIconsList socials={validSocialLinks} className="flex justify-center items-center gap-3" />
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
            <div className="flex-shrink-0 w-60 h-60 overflow-hidden rounded-full shadow-xl">
              <Image
                src={config.avatar_url}
                alt={`Avatar of ${config.name}`}
                className="w-full h-full object-cover object-center"
                width={480}
                height={480}
                priority
              />
            </div>
          </div>
        </div>
        {
          config.projects?.length > 0 && (
            <div id="projects" className="">
              {
                config.projects.map((project, index) => {
                  return (
                    <div key={project.name} className={`${index % 2 === 1 ? 'bg-white dark:bg-stone-900' : ''}`}>
                      <Project
                        project={project}
                        className="px-8 py-32 mx-auto snap-start"
                      />
                    </div>
                  );
                })
              }
            </div>
          )
        }
      </main>
      <footer className="py-16 snap-start">
        {
          validSocialLinks.length > 0 && (
            <SocialIconsList socials={validSocialLinks} className="mt-4 flex justify-center items-center gap-4" />
          )
        }
        <div className="mt-4 flex justify-center items-center gap-2 text-xs text-stone-500">
          <span>&#64;{new Date().getFullYear()} All Rights Reserved.</span>
          <span>Powered by <a href="https://github.com/huajiejin/dev-portfolio-pro" target="_blank" rel="noopener noreferrer" className="underline">Dev Portfolio Pro</a></span>
        </div>
      </footer>
    </div>
  );
}
