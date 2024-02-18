import Image from 'next/image';
import config from '../../dev-portfolio-pro.config';
import WorkItem from '@/components/WorkItem';
import { SocialIconsList } from '@/components/SocialIconsList';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

export default function Home() {
  // Valid social links
  const validSocialLinks = Object.entries(config.socials || {})
    .filter(([_, value]) => !!value)
  
  const emailSubject = encodeURIComponent(`Hello ${config.name} - From your portfolio`)
  const emailBody = encodeURIComponent(`Hello ${config.name},\n\nI found your portfolio, and I would like to connect with you.`)
  const emailHref = `mailto:${config.email}?subject=${emailSubject}&body=${emailBody}`

  return (
    <div>
      <header className="flex justify-end items-center fixed z-10 w-full h-16 p-6 bg-white dark:bg-gray-800">
        <div className="flex gap-8 text-sm font-medium">
          {
            config.work?.length > 0 && (
              <a href="#work">Work</a>
            )
          }
          <a href={emailHref}>Contact</a>
        </div>
      </header>
      <main id="top" className="bg-stone-50 dark:bg-stone-950">
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
          config.work?.length > 0 && (
            <div id="work" className="">
              {
                config.work.map((workItem, index) => {
                  return (
                    <div key={workItem.name} className={`${index % 2 === 1 ? 'bg-white dark:bg-stone-900' : ''}`}>
                      <WorkItem
                        workItem={workItem}
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
        <div className="mt-4 flex items-center justify-center gap-4">
          {
            config.resume_url && (
              <a
                href={config.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Resume
              </a>
            )
          }
          <a href={emailHref} className="btn-primary">Contact Me</a>
        </div>
        {
          validSocialLinks.length > 0 && (
            <SocialIconsList socials={validSocialLinks} className="mt-16 flex justify-center items-center gap-4" />
          )
        }
        <div className="mt-4 flex justify-center items-center gap-2 text-xs text-stone-500">
          <span>&#64;{new Date().getFullYear()} All Rights Reserved.</span>
          <span>Powered by <a href="https://github.com/huajiejin/dev-portfolio-pro" target="_blank" rel="noopener noreferrer" className="underline">Dev Portfolio Pro</a></span>
        </div>
        <div className="mt-4 text-xs text-stone-500">
          <a href="#top" className="flex justify-center items-center gap-1 cursor-pointer">
            <ChevronDoubleUpIcon className="w-4 h-4 -translate-y-[1px]" />
            Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}
